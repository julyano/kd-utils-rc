import { formatPhoneNumber } from '../index';

describe('Testing invalid phone number values', () => {
    test('Short value', () => {
        expect(formatPhoneNumber('12345678912')).toBe('(000) 0 0000-0000');
    });
    
    test('Long value', () => {
        expect(formatPhoneNumber('1234567891234')).toBe('(123) 4 5678-9123');
    });
    
    test('Strange characteres', () => {
        expect(formatPhoneNumber('54w491qw87r2862hb3$%')).toBe('(544) 9 1872-8623');
    });
    
    test('null value', () => {
        expect(formatPhoneNumber(null)).toBe('(000) 0 0000-0000');
    });
    
    test('Value with invalid size', () => {
        expect(formatPhoneNumber('')).toBe('(000) 0 0000-0000');
    });
});

describe('Testing valid phone number value', () => {
    test('Exact value', () => {
        expect(formatPhoneNumber('544918727138')).toBe('(544) 9 1872-7138');
    });
});