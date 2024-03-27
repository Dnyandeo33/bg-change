import { randomColor } from './randomColor.js';

describe('Get random color length', () => {
    it('should return a random integer between 0 and the input number', () => {
        const result = randomColor(10);
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThan(10);
    });
    it('should return 0 when the input number is 0', () => {
        const result = randomColor(0);
        expect(result).toBe(0);
    });
    it('should return 0 when the input number is negative', () => {
        const result = randomColor(-5);
        expect(result).toBe(0);
    });
    it('should return 0 when the input number is a floating-point number', () => {
        const result = randomColor(3.14);
        expect(result).toBe(0);
    });
});
