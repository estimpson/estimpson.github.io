import { Canvas } from '../../common/modules/canvas.js';

const vsSource = `#version 300 es
        layout (location = 0) in vec3 aPos;

        void main() {
            gl_Position = vec4(aPos.x, aPos.y, aPos.z, 1.0);
        }
    `;

const fsSource = `#version 300 es
        precision highp float;
        out vec4 FragColor;

        void main() {
            FragColor = vec4(1.0f, 0.5f, 0.2f, 1.0f);
        }
    `;

class WebGLExperiment {
    constructor(canvasSize) {
        this.canvasSize = canvasSize;
        this.canvas = null;
        this.statusDiv = null;

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

        // initialize shader programs
        const shaderProgram = this.initShaderProgram(gl, vsSource, fsSource);

        // build shader program info
        this.programInfo = {
            program: shaderProgram,
            attribLocations: {
                vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
            },
        };

        // init vertex array object with buffers for rectangle vertices
        this.VAO = this.initRectangleVertexArrayObject(gl);

        // draw scene
        this.drawScene(gl, this.programInfo, this.VAO);
    }

    /*
     * Create a rectangle vertex array
     */
    initRectangleVertexArrayObject(gl) {
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

        // 2.2. create array of positions for triangles that comprise rectangle
        const vertices = [
            // first triangle
             0.5,  0.5,  0.0, // top right
             0.5, -0.5,  0.0, // bottom right
            -0.5,  0.5,  0.0, // top left
            // second triangle
             0.5, -0.5,  0.0, // bottom right
            -0.5, -0.5,  0.0, // bottom left
            -0.5,  0.5,  0.0, // top left
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

        // do the drawing
        {
            const offset = 0;
            const vertexCount = 6;
            gl.drawArrays(gl.TRIANGLES, offset, vertexCount);
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
}

let webGLExperiment = new WebGLExperiment({ width: 1200, height: 1200 });
webGLExperiment.initialize();

// allow debugger to interact with mandelbrotExperiment
window.WebGLExperiment = webGLExperiment;