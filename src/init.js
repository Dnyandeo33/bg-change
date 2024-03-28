import { clickMe } from './event/btnEvent.js';
import { randomHexColor } from './utils/randomHex.js';

// Event
clickMe();
const hexColor = randomHexColor();
console.log(hexColor);
