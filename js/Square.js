import Rectangle from "./Rectangle.js";

export default class Square extends Rectangle {
    constructor(name, width) {
        super(name, width, width);
    }
}