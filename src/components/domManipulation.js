import { dom } from '../dom/dom.js';

export const domManipulation = (hexColor) => {
    dom.display.innerText = hexColor;
    dom.main.style.backgroundColor = hexColor;
};
