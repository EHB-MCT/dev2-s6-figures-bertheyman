"use strict";

import Figure from './Figure.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';

const form = {
    changeSelect(e) {
        console.log('Figure selected');

        switch (document.querySelector('#select').value) {
            case 'rectangle':
                document.querySelector('#otherInputs').insertAdjacentHTML('beforeend', form.inputElementsWithLabel('height', 'height'));
                document.querySelector('#otherInputs').insertAdjacentHTML('beforeend', form.inputElementsWithLabel('width', 'width'));
                break;
            case 'square':
                break;
            case 'circle':
                break;
        }
    },
    init() {
        console.log('Form init!');

        document.querySelector('#select').addEventListener('change', this.changeSelect);
        document.querySelector('#form').addEventListener('submit', this.submitForm);
        console.log('Events added');
    },
    inputElementsWithLabel(label, id) {
        return `<label>
        ${label}
        <input id="${id}" type="number">
      </label>`;
    },
    submitForm(e) {
        e.preventDefault();

        console.log('Adding Elements');

        console.log(document.querySelector('#select').value);

        switch (document.querySelector('#select').value) {
            case 'rectangle':
                const rectangle = new Rectangle('rect', document.querySelector('#width').value, document.querySelector('#height').value);
                document.querySelector('#results').insertAdjacentHTML('beforeend', rectangle.htmlString());
                break;
            case 'square':
                break;
            case 'circle':
                break;
        }
    }
};

form.init();

console.log('Start JS');