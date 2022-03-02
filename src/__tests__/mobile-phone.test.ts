import { formatMobilePhone } from '../index';

describe('Testing invalid phone number values', () => {
    test('Short value', () => {
        expect(formatMobilePhone('12345678912')).toBe('(000) 0 0000-0000');
    });
    
    test('Long value', () => {
        expect(formatMobilePhone('1234567891234')).toBe('(123) 4 5678-9123');
    });
    
    test('Strange characteres', () => {
        expect(formatMobilePhone('54w491qw87r2862hb3$%')).toBe('(544) 9 1872-8623');
    });
    
    test('null value', () => {
        expect(formatMobilePhone(null)).toBe('(000) 0 0000-0000');
    });
    
    test('Value with invalid size', () => {
        expect(formatMobilePhone('')).toBe('(000) 0 0000-0000');
    });
});

describe('Testing valid phone number value', () => {
    test('Exact value', () => {
        expect(formatMobilePhone('544918727138')).toBe('(544) 9 1872-7138');
    });
});