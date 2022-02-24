import { formatCep } from '../index';

test('Short value', () => {
    expect(formatCep('1234567')).toBe('00000-000');
});

test('Long value', () => {
    expect(formatCep('123456789')).toBe('12345-678');
});

test('Strange characteres', () => {
    expect(formatCep('54w401qw87r2')).toBe('54401-872');
});

test('null value', () => {
    expect(formatCep(null)).toBe('00000-000');
});

test('Value with invalid size', () => {
    expect(formatCep('')).toBe('00000-000');
});

test('Exact value', () => {
    expect(formatCep('54401872')).toBe('54401-872');
});