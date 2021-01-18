import { Canvas } from '../../common/modules/canvas.js';
//import _, { map } from 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.12.0/underscore-esm-min.js';

const vsSource = `
        attribute vec4 aVertexPosition;
        attribute vec4 aVertexColor;

        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;

        varying lowp vec4 vColor;

        void main() {
            gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
            //vColor = aVertexColor;
        }
    `;

const fsSource = `
        //varying lowp vec4 vColor;

        //void main(void) {
        //    gl_FragColor = vColor;
        //}

        precision highp float;
        //uniform mat4 uModelViewMatrix;
        //uniform mat4 uProjectionMatrix;

        void main() {
	        //Scale point by input transformation matrix
	        //vec2 p = (uProjectionMatrix * uModelViewMatrix * vec4(gl_PointCoord,0,1)).xy;
	        vec2 p = vec4(gl_PointCoord,0,1).xy;
	        vec2 c = p;

	        //Set default color to HSV value for black
	        vec3 color=vec3(0.0,0.0,0.0);

	        //Max number of iterations will arbitrarily be defined as 100. Finer detail with more computation will be found for larger values.
	        for(int i=0;i<100;i++){
		        //Perform complex number arithmetic
		        p= vec2(p.x*p.x-p.y*p.y,2.0*p.x*p.y)+c;
		        
		        if (dot(p,p)>4.0){
			        //The point, c, is not part of the set, so smoothly color it. colorRegulator increases linearly by 1 for every extra step it takes to break free.
			        float colorRegulator = float(i-1)-log(((log(dot(p,p)))/log(2.0)))/log(2.0);
			        //This is a coloring algorithm I found to be appealing. Written in HSV, many functions will work.
			        color = vec3(0.95 + .012*colorRegulator , 1.0, .2+.4*(1.0+sin(.3*colorRegulator)));
			        break;
		        }
	        }
	        //Change color from HSV to RGB. Algorithm from https://gist.github.com/patriciogonzalezvivo/114c1653de9e3da6e1e3
	        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
	        vec3 m = abs(fract(color.xxx + K.xyz) * 6.0 - K.www);
	        //gl_FragColor.rgb = color.z * mix(K.xxx, clamp(m - K.xxx, 0.0, 1.0), color.y);
            gl_FragColor.r = c.x;
            gl_FragColor.g = c.y;
            gl_FragColor.b = 0.0;
	        gl_FragColor.a=1.0;
        }
    `;

var squareRotation = 0.0;

class WebGLExperiment {
    constructor(canvasSize) {
        this.canvasSize = canvasSize;
        this.canvas = null;
        this.statusDiv = null;

        this.initialized = false;
        this.gl = null; // WebGL context
        this.programInfo = null; // locations of shader program, attributes, and uniforms
        this.buffers = null;
        this.then = 0;
    }

    initialize() {
        if (this.initialized) {
            console.log("Only initialize once");
            return;
        }

        // create canvas with WebGL context
        this.canvas = new Canvas('myCanvas', document.body, this.canvasSize.width, this.canvasSize.height);
        this.canvas.create("webgl");
        const gl = this.canvas.context;
        this.gl = gl;

        // initialize shader programs
        const shaderProgram = this.initShaderProgram(gl, vsSource, fsSource);

        // build shader program info
        this.programInfo = {
            program: shaderProgram,
            attribLocations: {
                vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
                vertexColor: gl.getAttribLocation(shaderProgram, "aVertexColor"),
            },
            uniformLocations: {
                projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
                modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
            },
        };

        // init buffers with vertices of a square
        this.buffers = this.initTriangleVerticesBuffer(gl);

        //requestAnimationFrame(this.render.bind(this));
        
        // draw scene
        this.drawScene(gl, this.programInfo, this.buffers);
    }

    // draw the scene repeatedly
    render(now) {
        now *= 0.001;  // convert to seconds
        const deltaTime = now - this.then;
        this.then = now;

        this.drawScene(this.gl, this.programInfo, this.buffers, deltaTime);

        requestAnimationFrame(this.render.bind(this));
    }

    /*
     * Create a square plane
     */
    initTriangleVerticesBuffer(gl) {
        // create a buffer for the square's positions
        const positionBuffer = gl.createBuffer();

        // select the positionBuffer as the one to apply buffer
        // operations to from here out
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

        // create array of positions for square
        const positions = [
            -1.0,  1.0, 0.0,   // top left
            -1.0, -1.0, 0.0,   // bottom left
             1.0, -1.0, 0.0,   // bottom right
             1.0,  1.0, 0.0,    // top right
        ];

        // pass positions to WebGL to build shape
        gl.bufferData(gl.ARRAY_BUFFER,
            new Float32Array(positions),
            gl.STATIC_DRAW);

        // create a buffer for the draw order
        const drawOrderBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, drawOrderBuffer);

        const drawOrder = [0, 1, 2, 0, 2, 3,]; // order to draw vertices

        gl.bufferData(gl.ARRAY_BUFFER,
            new Float32Array(drawOrder),
            gl.STATIC_DRAW);

        // setup colors for the vertices
        const colors = [
            1.0, 1.0, 1.0, 1.0,    // white
            1.0, 0.0, 0.0, 1.0,    // red
            0.0, 1.0, 0.0, 1.0,    // green
            0.0, 0.0, 1.0, 1.0,    // blue
        ];

        const colorBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

        return {
            position: positionBuffer,
            drawOrder: drawOrderBuffer,
            color: colorBuffer,
        };
    }

    /*
     * Draw simple scene
     */
    drawScene(gl, programInfo, buffers) {
        gl.clearColor(0.0, 0.0, 0.0, 1.0);  // clear to black, fully opaque
        gl.clearDepth(1.0);                 // clear everything
        gl.enable(gl.DEPTH_TEST);           // enable depth testing
        gl.depthFunc(gl.LEQUAL);            // near things obscure far things

        // clear the canvas before we start drawing on it.
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // create a perspective matrix, a special matrix that is
        // used to simulate the distortion of perspective in a camera

        // our field of view is 45 degrees, with a width/height
        // ratio that matches the display size of the canvas
        // and we only want to see objects between 0.1 units
        // and 100 units away from the camera
        const fieldOfView = 45 * Math.PI / 180;   // in radians
        const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
        const zNear = 0.1;
        const zFar = 100.0;
        const projectionMatrix = mat4.create();

        // note: glmatrix.js always has the first argument
        // as the destination to receive the result
        mat4.perspective(projectionMatrix,
            fieldOfView,
            aspect,
            zNear,
            zFar);

        // set the drawing position to the "identity" point, which is
        // the center of the scene
        const modelViewMatrix = mat4.create();

        // now move the drawing position a bit to where we want to
        // start drawing the square
        mat4.translate(
            modelViewMatrix,     // destination matrix
            modelViewMatrix,     // matrix to translate
            [-0.0, 0.0, -6.0]);  // amount to translate

        // tell WebGL how to pull out the positions from the position
        // buffer into the vertexPosition attribute
        {
            const numComponents = 3;  // pull out 2 values per iteration
            const type = gl.FLOAT;    // the data in the buffer is 32bit floats
            const normalize = false;  // don't normalize
            const stride = 0;         // how many bytes to get from one set of values to the next
                                      // 0 = use type and numComponents above
            const offset = 0;         // how many bytes inside the buffer to start from
            gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
            gl.vertexAttribPointer(
                programInfo.attribLocations.vertexPosition,
                numComponents,
                type,
                normalize,
                stride,
                offset);
            gl.enableVertexAttribArray(
                programInfo.attribLocations.vertexPosition);
        }

        // tell WebGL to use our program when drawing
        gl.useProgram(programInfo.program);

        // set the shader uniforms
        gl.uniformMatrix4fv(
            programInfo.uniformLocations.projectionMatrix,
            false,
            projectionMatrix);
        gl.uniformMatrix4fv(
            programInfo.uniformLocations.modelViewMatrix,
            false,
            modelViewMatrix);

        //{
        //    const offset = 0;
        //    const vertexCount = 4;
        //    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
        //}
        
        //debug
        {
            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, buffers.drawOrder);
        }
        gl.disableVertexAttribArray(programInfo.attribLocations.vertexPosition);
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