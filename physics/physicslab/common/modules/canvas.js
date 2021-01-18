class Canvas {
    constructor(id, parent, width, height) {
        this.id = id;
        this.parent = parent;
        this.width = width;
        this.height = height;
        this.context = null;
        this.contextType = null;
        this.canvasElem = null;
    }

    // new class stuff above here

    create(contextType="2d") {
        if (this.context !== null) {
            console.log("Canvas already created!");
            return;
        } else {
            let divWrapper = document.createElement("div");
            this.canvasElem = document.createElement("canvas");
            this.parent.appendChild(divWrapper);
            divWrapper.appendChild(this.canvasElem);

            divWrapper.id = this.id;
            this.canvasElem.width = this.width;
            this.canvasElem.height = this.height;

            this.contextType = contextType;
            this.context = this.canvasElem.getContext(this.contextType);
            if (this.context === null) {
                alert(`Unable to initialize ${this.contextType}.  Your browser or machine may not support it.`);
                return;
            }
        }
    }

    attachCanvasListener(eventName, handler) {
        this.canvasElem.addEventListener(eventName, handler);
    }
}

export { Canvas };