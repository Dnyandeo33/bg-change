import { data } from '../data/data.js';
import { dom } from '../dom/dom.js';
import { randomColor } from '../utils/randomColor.js';

// const randomColor = (num) => {
//     return Math.floor(Math.random() * num);
// };

export const changeBG = () => {
    const colorNum = randomColor(data.color.length);
    dom.main.style.backgroundColor = data.color[colorNum];
};
