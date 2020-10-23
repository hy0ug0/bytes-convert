import { convert, Units } from '../src/main';

describe('convert', () => {
    test('should throw an error if a wrong unit is provided', () => {
        // @ts-expect-error test the case of an invalid unit
        expect(() => convert(656, 'TOTO')).toThrowError('Unit not supported!');
    });

    test('should throw an error if no parameter provided', () => {
        // @ts-expect-error test the case of no parameter
        expect(() => convert()).toThrowError('Nothing to convert!');
    });

    test('should throw an error if the value is negative', () => {
        expect(() => convert(-656)).toThrowError(
            "Value can't be a negative number!"
        );
    });

    test('should convert in octet if no unit is specified', () => {
        expect(convert(656)).toBe('656o');
    });

    test('should convert in Ko if no unit is specified', () => {
        expect(convert(6563)).toBe('6.41Ko');
    });

    test('should convert in octet', () => {
        expect(convert(656, Units.OCTET)).toBe('656o');
    });

    test('should convert in Ko', () => {
        expect(convert(6563, Units.OCTET)).toBe('6.41Ko');
    });

    test('should convert in Mo', () => {
        expect(convert(6563123, Units.OCTET)).toBe('6.26Mo');
    });

    test('should convert in Go', () => {
        expect(convert(6563123456, Units.OCTET)).toBe('6.11Go');
    });

    test('should convert in To', () => {
        expect(convert(6563123456385, Units.OCTET)).toBe('5.97To');
    });

    test('should convert in byte', () => {
        expect(convert(656, Units.BYTE)).toBe('656B');
    });

    test('should convert in KB', () => {
        expect(convert(6563, Units.BYTE)).toBe('6.41KB');
    });

    test('should convert in MB', () => {
        expect(convert(6563123, Units.BYTE)).toBe('6.26MB');
    });

    test('should convert in GB', () => {
        expect(convert(6563123456, Units.BYTE)).toBe('6.11GB');
    });

    test('should convert in TB', () => {
        expect(convert(6563123456385, Units.BYTE)).toBe('5.97TB');
    });
});
