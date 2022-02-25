import { formatCnpj } from '../index';

describe('Testing invalid cnpj values', () => {
    test('Short value', () => {
        expect(formatCnpj('1234567891234')).toBe('00.000.000/0000-00');
    });
    
    test('Long value', () => {
        expect(formatCnpj('123456789123456')).toBe('12.345.678/9123-45');
    });
    
    test('Strange characteres', () => {
        expect(formatCnpj('54w401qw87r2862hb337$%')).toBe('54.401.872/8623-37');
    });
    
    test('null value', () => {
        expect(formatCnpj(null)).toBe('00.000.000/0000-00');
    });
    
    test('Value with invalid size', () => {
        expect(formatCnpj('')).toBe('00.000.000/0000-00');
    });
});

describe('Testing valid cnpj value', () => {
    test('Exact value', () => {
        expect(formatCnpj('54401872713855')).toBe('54.401.872/7138-55');
    });
});