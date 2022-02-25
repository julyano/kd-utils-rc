import { formatCpf } from '../index';

describe('Testing invalid cpf values', () => {
    test('Short value', () => {
        expect(formatCpf('1234567890')).toBe('000.000.000-00');
    });
    
    test('Long value', () => {
        expect(formatCpf('123456789000')).toBe('123.456.789-00');
    });
    
    test('Strange characteres', () => {
        expect(formatCpf('54w401qw87r2862hb')).toBe('544.018.728-62');
    });
    
    test('null value', () => {
        expect(formatCpf(null)).toBe('000.000.000-00');
    });
    
    test('Value with invalid size', () => {
        expect(formatCpf('')).toBe('000.000.000-00');
    });
});

describe('Testing valid cpf value', () => {
    test('Exact value', () => {
        expect(formatCpf('54401872713')).toBe('544.018.727-13');
    });
});