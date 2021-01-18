class MandelbrotSetGenerator {
    constructor(pixelRes, center, size, maxIterations, escapeRadius) {
        // pixelRes expects {pxWidth: int, pxHeight: int}
        this.pxWidth = pixelRes.pxWidth;
        this.pxHeight = pixelRes.pxHeight;

        // center expects {x: float, y: float}
        this.centerX = center.x;
        this.centerY = center.y;

        // size expects {width: float, height: float}
        this.width = size.width;
        this.height = size.height;

        this.maxIterations = maxIterations; // int
        this.escapeRadius = escapeRadius;   // float
    }

    renderSet() {
        const resultSet = []; // 2d array of points and their Mandelbrot characteristics

        // loop pixel columns
        for (let xPixel = 0; xPixel < this.pxWidth; xPixel++) {
            resultSet[xPixel] = [];

            // loop pixel rows
            for (let yPixel = 0; yPixel < this.pxHeight; yPixel++) {

                // find the Re part of C for this column
                let C = {
                    a: this.centerX - this.width / 2 + xPixel * this.width / this.pxWidth,
                    b: this.centerY - this.height / 2 + yPixel * this.height / this.pxHeight
                };
                C.Norm2 = C.a * C.a + C.b * C.b;

                let z = { a: 0, b: 0 };
                let zNorm2 = 0;
                let zNorm2Max = 0;
                let i = 0;
                while (i < this.maxIterations && zNorm2Max < this.escapeRadius) {

                    // calculate next z
                    z = { a: z.a * z.a - z.b * z.b + C.a, b: 2 * z.a * z.b + C.b };

                    // calculate 2nd norm of new z
                    zNorm2 = z.a * z.a + z.b * z.b;

                    // calculate max 2nd norm of z
                    zNorm2Max = zNorm2 > zNorm2Max ? zNorm2 : zNorm2Max;

                    // iterate
                    i++;
                }

                // calculate continuous iteration that resulted in escape
                const mu = i;
                resultSet[xPixel][yPixel] = { C: C, InSet: (i === this.maxIterations), mu: mu, Norm2Max: zNorm2Max };
            }
        }
        return resultSet;
    }

    renderSetSmooth() {
        const resultSet = []; // 2d array of points and their Mandelbrot characteristics

        // loop pixel columns
        for (let xPixel = 0; xPixel < this.pxWidth; xPixel++) {
            resultSet[xPixel] = [];

            // loop pixel rows
            for (let yPixel = 0; yPixel < this.pxHeight; yPixel++) {

                // find the Re part of C for this column
                let C = {
                    a: this.centerX - this.width / 2 + xPixel * this.width / this.pxWidth,
                    b: this.centerY - this.height / 2 + yPixel * this.height / this.pxHeight
                };
                C.Norm2 = C.a * C.a + C.b * C.b;

                let z = { a: 0, b: 0 };
                let zNorm2 = 0;
                let zNorm2Max = 0;
                let i = 0;
                while (i < this.maxIterations && zNorm2Max < this.escapeRadius) {

                    // calculate next z
                    z = { a: z.a * z.a - z.b * z.b + C.a, b: 2 * z.a * z.b + C.b };

                    // calculate 2nd norm of new z
                    zNorm2 = z.a * z.a + z.b * z.b;

                    // calculate max 2nd norm of z
                    zNorm2Max = zNorm2 > zNorm2Max ? zNorm2 : zNorm2Max;

                    // iterate
                    i++;
                }

                // calculate continuous iteration that resulted in escape
                const mu = (i === this.maxIterations) ? i : i - Math.log(Math.log(zNorm2Max) / 2) / Math.LN2;
                resultSet[xPixel][yPixel] = { C: C, InSet: (i === this.maxIterations), mu: mu, Norm2Max: zNorm2Max };
            }
        }
        return resultSet;
    }

    getPointOrbit(a, b, iterations) {
        let C = { a: a, b: b };
        let z = [];
        z.length = iterations;
        z[0] = C;
        for (var i = 1; i < iterations; i++) {
            z[i] = {
                a: z[i - 1].a * z[i - 1].a - z[i - 1].b * z[i - 1].b + C.a,
                b: 2 * z[i - 1].a * z[i - 1].b + C.b
            };
        }
        return z;
    }
}

export { MandelbrotSetGenerator };
