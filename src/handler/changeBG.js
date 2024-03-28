import { domManipulation } from '../components/domManipulation.js';
import { randomHexColor } from '../utils/randomHex.js';

export const changeBG = () => {
    const hexColor = randomHexColor();
    domManipulation(hexColor);
};
