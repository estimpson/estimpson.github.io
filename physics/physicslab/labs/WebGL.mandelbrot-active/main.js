import { Canvas } from '../../common/modules/canvas.js';

const vsSource = `#version 300 es
        layout (location = 0) in vec3 aPos;   // the position of the vertex

        uniform vec3 translation;  // move the vertex
        uniform float scale;       // scale the points

        out vec3 position;

        void main() {
            gl_Position = vec4(aPos, 1.0);  // move the triangle
            position = translation + scale * aPos;  // pass to fragment shader
        }
    `;

const fsSource = `#version 300 es
        precision highp float;
        out vec4 FragColor;
        in vec3 position; // passed from vertex shader

        //int maxI = 100;

        void main() {
            vec2 C = position.xy;
            vec2 z = vec2(0.0, 0.0);
            float zNorm = 0.0;
            int i = 0;
            while (i < 100 && zNorm < 4.0) {
                z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + C;
                zNorm = dot(z,z);
                i++;
            }
            if (zNorm < 4.0) {
                FragColor = vec4(0.0, 0.0, 0.0, 1.0);
            }
            else {
                float colorRegulator = float(i) - log(log(zNorm)/2.0)/log(2.0);
                vec3 color = vec3(0.95 + 0.12*colorRegulator, 1.0, .2+.4*(1.0 + sin(.3*colorRegulator)));
                vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
                vec3 m = abs(fract(color.xxx + K.xyz) * 6.0 - K.www);
                FragColor.rgb = color.z * mix(K.xxx, clamp(m - K.xxx, 0.0, 1.0), color.y);
                FragColor.a = 1.0;
            }
        }
    `;

class WebGLExperiment {
    constructor(canvasSize) {
        this.canvasSize = canvasSize;
        this.canvas = null;
        this.statusDiv = null;
        this.center = { x: 0.0, y: 0.0 };
        this.scale = 3.0;

        this.initialized = false;
        this.gl = null; // WebGL context
        this.programInfo = null; // locations of shader program, attributes, and uniforms
        this.VAO = null; // Vertex Array Object
    }

    initialize() {
        if (this.initialized) {
            console.log("Only initialize once");
            return;
        }

        // create canvas with WebGL context
        this.canvas = new Canvas('myCanvas', document.body, this.canvasSize.width, this.canvasSize.height);
        this.canvas.create("webgl2");
        const gl = this.canvas.context;
        this.gl = gl;

        // create a status bar div
        this.statusDiv = document.createElement('div');
        document.body.appendChild(this.statusDiv);

        // attach canvas event listeners
        this.canvas.attachCanvasListener("mousemove", this.handleCanvasMouseMove.bind(this));
        this.canvas.attachCanvasListener("wheel", this.handleCanvasWheel.bind(this));
        this.canvas.attachCanvasListener("click", this.handleCanvasClick.bind(this));

        // interrogate the WebGL context capabilities
        this.interrogateGL(this.gl);

        // initialize shader programs
        const shaderProgram = this.initShaderProgram(gl, vsSource, fsSource);

        // build shader program info
        this.programInfo = {
            program: shaderProgram,
            attribLocations: {
                vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
            },
        };

        // init vertex array object with buffers for triangle vertices
        this.VAO = this.initTriangleVertexArrayObject(gl);

        // draw scene
        this.drawScene(gl, this.programInfo, this.VAO);
    }

    /*
     * Create a triangle vertex array
     */
    initTriangleVertexArrayObject(gl) {
        // 0. generate a vertex array object
        const vao = gl.createVertexArray();

        // 1. bind vertex array object
        gl.bindVertexArray(vao);

        // 2. copy our vertices array in a buffer for OpenGL to use
        // 2.0. create a vertex buffer object for geometry vertices
        const vbo = gl.createBuffer();
        // 2.1. bind our vertex buffer object
        gl.bindBuffer(
            gl.ARRAY_BUFFER, // used for vertices
            vbo              // the ID of the buffer
        );

        // 2.2. create array of positions and colors for triangle
        const vertices = [
            // positions
             1.0,  1.0,  0.0,  // top right
             1.0, -1.0,  0.0,  // bottom right
            -1.0,  1.0,  0.0,  // top left
            -1.0, -1.0,  0.0,  // bottom left
        ];

        // 2.3 send (static data, indicating vertices don't change) data 
        // pass vertices to WebGL
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array(vertices),
            gl.STATIC_DRAW
        );

        // 3. then set our vertex attribute pointers
        {
            // tell WebGL how to pull out the vertices from the vertices
            // buffer into the vertexPosition attribute
            const location = 0;       // from vsShader:   layout(location = 0) in vec3 aPos;
            const numComponents = 3;  // pull out 3 values (x,y,z) per iteration
            const type = gl.FLOAT;    // the data in the buffer is 32bit floats
            const normalize = false;  // don't normalize
            const stride = 0;         // how many bytes to get from one set of values to the next
            const offset = 0;         // how many bytes inside the buffer to start from
            gl.vertexAttribPointer(
                location, // this line from vsShader:  layout (location = 0) in vec3 aPos; 
                numComponents,
                type,
                normalize,
                stride,
                offset);
            gl.enableVertexAttribArray(
                location
            );
        }

        return vao;
    }

    /*
     * Draw simple scene
     */
    drawScene(gl, programInfo, vao) {

        // tell WebGL to use our program when drawing
        gl.useProgram(programInfo.program);

        // bind the vertex array object
        gl.bindVertexArray(vao);

        // set the translation uniform to move the triangle
        const translationUniformLocation = gl.getUniformLocation(programInfo.program, "translation");
        gl.uniform3f(translationUniformLocation, this.center.x, this.center.y, 0.0);
        const scaleUniformLocation = gl.getUniformLocation(programInfo.program, "scale");
        gl.uniform1f(scaleUniformLocation, this.scale);

        // do the drawing
        {
            const offset = 0;
            const vertexCount = 4;
            gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
        }
    }

    /*
     * Initialize a shader program, so WebGL knows how to draw our data
     */
    initShaderProgram(gl, vsSource, fsSource) {
        const vertexShader = this.loadShader(gl, gl.VERTEX_SHADER, vsSource);
        const fragmentShader = this.loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

        // create the shader program
        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);

        // delete the compiled shaders which are now part of the shaderProgram
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);

        // if create the shader program failed, alert
        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            alert("Unable to initialize the shader program: " + gl.getProgramInfoLog(shaderProgram));
            return null;
        }
        return shaderProgram;
    }

    /*
     * Create a shader of the given type, upload, and compile
     */
    loadShader(gl, type, source) {
        const shader = gl.createShader(type);

        // send source
        gl.shaderSource(shader, source);

        // compile
        gl.compileShader(shader);

        // check compilation
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert("An error occured compiling the shaders: " + gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }

        return shader;
    }

    /*
     * Interrogate properties of the GL
     */
    interrogateGL(gl) {
        console.log(`MAX_VERTEX_ATTRIBS: ${gl.getParameter(gl.MAX_VERTEX_ATTRIBS)}`);
    }

    handleCanvasMouseMove(event) {
        const mouseCoords = { px: event.layerX, py: event.layerY };
        const xyCoords = {
            x: 2 * this.scale * (mouseCoords.px / this.canvasSize.width - 1 / 2) + this.center.x,
            y: 2 * this.scale * (1 / 2 - mouseCoords.py / this.canvasSize.height) + this.center.y,
        } 
        this.statusDiv.innerText =
            `(px:${mouseCoords.px},py:${mouseCoords.py}) -> (x:${xyCoords.x.toFixed(10)},y:${xyCoords.y.toFixed(10)
            }); center:(${this.center.x},${this.center.y}); scale:${this.scale}`;
    }

    handleCanvasWheel(events) {
        const mouseCoords = { px: event.layerX, py: event.layerY };
        const xyCoords = {
            x: 2 * this.scale * (mouseCoords.px / this.canvasSize.width - 1 / 2) + this.center.x,
            y: 2 * this.scale * (1 / 2 - mouseCoords.py / this.canvasSize.height) + this.center.y,
        }
        const newScale = this.scale * (1 + event.deltaY / 1000);
        const newCenter = {
            x: this.center.x + 2 * (mouseCoords.px / this.canvasSize.width - 1 / 2) * (this.scale - newScale),
            y: this.center.y + 2 * (1 / 2 - mouseCoords.py / this.canvasSize.height) * (this.scale - newScale),
    }

        this.statusDiv.innerText =
            `(px:${mouseCoords.px},py:${mouseCoords.py}) -> (x:${xyCoords.x.toFixed(10)},y:${xyCoords.y.toFixed(10)
            }); center:(${this.center.x},${this.center.y}) -> center':(${newCenter.x},${newCenter.y})'; scale:${
            this.scale} -> scale':${newScale}`;

        this.center = newCenter;
        this.scale = newScale;
        this.drawScene(this.gl, this.programInfo, this.VAO);
    }

    handleCanvasClick(events) { }

}

let webGLExperiment = new WebGLExperiment({ width: 1200, height: 1200 });
webGLExperiment.initialize();

// allow debugger to interact with mandelbrotExperiment
window.WebGLExperiment = webGLExperiment;