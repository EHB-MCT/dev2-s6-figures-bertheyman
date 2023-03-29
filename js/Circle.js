import Figure from "./Figure.js";

export default class Circle extends Figure {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    get area() {
        return this.radius * this.radius * Math.PI;
    }

    get circumference() {
        return this.radius * Math.PI * 2;
    }

    htmlString() {
        return `<div class="result">
        <div class="figure circle" style="width: ${this.diameter}px; height: ${this.diameter}px;"></div>
        <div class="infoBox">
          <h3>Circle</h3>
          <dl>
            <dt>Radius</dt>
            <dd>${this.radius} px</dd>
      
            <dt>Diameter</dt>
            <dd>${this.diameter} px</dd>
      
            <dt>Area</dt>
            <dd>${this.area} px</dd>
      
            <dt>Circumference</dt>
            <dd>${this.circumference} px</dd>
          </dl>
        </div>
      </div>`;
    }
}