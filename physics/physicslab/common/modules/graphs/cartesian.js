class Cartesian2d {
    constructor(ctx) {
        this.context = ctx;
        this.xSizePixel = ctx.canvas.clientWidth;
        this.ySizePixel = ctx.canvas.clientHeight;
    }

    SetBounds(xCenter, yCenter, xLengthPlotArea, yLengthPlotArea) {
        this.xLengthPlotArea = xLengthPlotArea;
        this.yLengthPlotArea = yLengthPlotArea;

        this.xLowerBound = -this.xLengthPlotArea / 2 + xCenter;
        this.xUpperBound = this.xLengthPlotArea / 2 + xCenter;
        this.yLowerBound = -this.yLengthPlotArea / 2 + yCenter;
        this.yUpperBound = this.yLengthPlotArea / 2 + yCenter;

        this.xPixelToPlotAreaRatio = this.xSizePixel / xLengthPlotArea;
        this.yPixelToPlotAreaRatio = this.ySizePixel / yLengthPlotArea;
    }

    draw() {
        this.context.strokeStyle = "#DDDDDD";
        this.context.lineWidth = 3;

        // X-axis
        this.context.beginPath();
        let xAxisLeftEndPoint = this.cartesianCoordsToPxCoords(this.xLowerBound, 0);
        let xAxisRightEndPoint = this.cartesianCoordsToPxCoords(this.xUpperBound, 0);
        this.context.moveTo(xAxisLeftEndPoint.x, xAxisLeftEndPoint.y);
        this.context.lineTo(xAxisRightEndPoint.x, xAxisRightEndPoint.y);
        this.context.closePath();
        this.context.stroke();

        // Y-axis
        this.context.beginPath();
        let yAxisLeftEndPoint = this.cartesianCoordsToPxCoords(0, this.yLowerBound)
        let yAxisRightEndPoint = this.cartesianCoordsToPxCoords(0, this.yUpperBound);
        this.context.moveTo(yAxisLeftEndPoint.x, yAxisLeftEndPoint.y);
        this.context.lineTo(yAxisRightEndPoint.x, yAxisRightEndPoint.y);
        this.context.closePath();
        this.context.stroke();
    }

    drawPoint(x, y, color) {
        this.context.fillStyle = color;

        let point = this.cartesianCoordsToPxCoords(x, y);
        this.context.fillRect(point.x, point.y, 1, 1);
    }

    beginDraw() {
        this.imageData = this.context.createImageData(this.xSizePixel, this.ySizePixel);
    }

    drawPoint2(x, y, red, green, blue) {
        let point = this.cartesianCoordsToPxCoords(x, y);
        this.imageData.data[(point.y * this.xSizePixel + point.x) * 4 + 0] = Math.round(red);
        this.imageData.data[(point.y * this.xSizePixel + point.x) * 4 + 1] = Math.round(green);
        this.imageData.data[(point.y * this.xSizePixel + point.x) * 4 + 2] = Math.round(blue);
        this.imageData.data[(point.y * this.xSizePixel + point.x) * 4 + 3] = 255;
    }

    drawPoint3(px, py, red, green, blue) {
        this.imageData.data[(py * this.xSizePixel + px) * 4 + 0] = Math.round(red);
        this.imageData.data[(py * this.xSizePixel + px) * 4 + 1] = Math.round(green);
        this.imageData.data[(py * this.xSizePixel + px) * 4 + 2] = Math.round(blue);
        this.imageData.data[(py * this.xSizePixel + px) * 4 + 3] = 255;
    }

    endDraw() {
        //this.ctx.putImageData(this.imageData, 0, 0);
        Promise.all([createImageBitmap(this.imageData)])
            .then(imageMS => this.context.drawImage(imageMS[0], 0, 0, 1200, 1200));
    }

    drawRect(x, y, width, height, color) {
        this.context.fillStyle = color;

        let topLeftPoint = this.cartesianCoordsToPxCoords(x, y);
        let bottomRightPoint = this.cartesianCoordsToPxCoords(x + width, y + height);
        this.context.fillRect(topLeftPoint.x,
            topLeftPoint.y,
            bottomRightPoint.x - topLeftPoint.x,
            bottomRightPoint.y - topLeftPoint.y);
    }

    cartesianCoordsToPxCoords(x, y) {
        return new Point2d(Math.round((x - this.xLowerBound) * this.xPixelToPlotAreaRatio),
            Math.round((this.yUpperBound - y) * this.yPixelToPlotAreaRatio));
    }

    pxCoordsToCartesianCoords(px, py) {
        return new Point2d(px / this.xPixelToPlotAreaRatio + this.xLowerBound,
            - py / this.yPixelToPlotAreaRatio + this.yUpperBound);
    }
}

class Point2d {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export { Cartesian2d, Point2d };