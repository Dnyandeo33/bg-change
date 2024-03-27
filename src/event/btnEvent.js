import { dom } from '../dom/dom.js';
import { changeBG } from '../handler/changeBG.js';

export const clickMe = () => {
    dom.button.addEventListener('click', changeBG);
};
