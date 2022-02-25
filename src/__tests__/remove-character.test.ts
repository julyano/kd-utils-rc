import { removeCharacter } from '../index';

describe('Testing invalid characteres values', () => {
    test('Characteres not found', () => {
        expect(removeCharacter('12345678912', '#@')).toBe('12345678912');
    });
    
    test('Value with just one macth', () => {
        expect(removeCharacter('123,456!#7,89(1234', '@,')).toBe('123456!#789(1234');
    });
    
    test('null value of characteres to remmove', () => {
        expect(removeCharacter('54w491qw87r2862hb3$%', null)).toBe('54w491qw87r2862hb3$%');
    });
    
    test('null value', () => {
        expect(removeCharacter(null, '#^')).toBe(null);
    });
});

describe('Testing valid character value', () => {
    test('Exact value', () => {
        expect(removeCharacter('5@@4491%872%7138', '%*#@')).toBe('544918727138');
    });
});