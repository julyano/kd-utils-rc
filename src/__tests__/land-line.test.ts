import { formatLandLine } from '../index';

describe('Testing invalid phone number values', () => {
    test('Short value', () => {
        expect(formatLandLine('1234567891')).toBe('(000) 0000-0000');
    });
    
    test('Long value', () => {
        expect(formatLandLine('1234567891234')).toBe('(123) 4567-8912');
    });
    
    test('Strange characteres', () => {
        expect(formatLandLine('54w491qw87r2862hb$%')).toBe('(544) 9187-2862');
    });
    
    test('null value', () => {
        expect(formatLandLine(null)).toBe('(000) 0000-0000');
    });
    
    test('Value with invalid size', () => {
        expect(formatLandLine('')).toBe('(000) 0000-0000');
    });
});

describe('Testing valid phone number value', () => {
    test('Exact value', () => {
        expect(formatLandLine('54491872713')).toBe('(544) 9187-2713');
    });
});