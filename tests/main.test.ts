import { convertFromBits, convertFromOctet, Units } from '../src/main';

describe('convertFromBits', () => {
    test('should throw an error if a wrong unit is provided', () => {
        // @ts-expect-error test the case of an invalid unit
        expect(() => convertFromBits(656, 'TOTO')).toThrowError(
            'Unit not supported!'
        );
    });

    test('should throw an error if no parameter provided', () => {
        // @ts-expect-error test the case of no parameter
        expect(() => convertFromBits()).toThrowError('Nothing to convert!');
    });

    test('should throw an error if the value is negative', () => {
        expect(() => convertFromBits(-656)).toThrowError(
            "Value can't be a negative number!"
        );
    });

    test('should convert in octet if no unit is specified', () => {
        expect(convertFromBits(656)).toBe('82o');
    });

    test('should convert in octet if no unit is specified', () => {
        expect(convertFromBits(6563)).toBe('820.38o');
    });

    test('should convert in octet', () => {
        expect(convertFromBits(656, Units.OCTET)).toBe('82o');
    });

    test('should convert in Ko', () => {
        expect(convertFromBits(6563123, Units.OCTET)).toBe('820.39Ko');
    });

    test('should convert in Mo', () => {
        expect(convertFromBits(6563123456, Units.OCTET)).toBe('820.39Mo');
    });

    test('should convert in Go', () => {
        expect(convertFromBits(6563123456385, Units.OCTET)).toBe('820.39Go');
    });

    test('should convert in To', () => {
        expect(convertFromBits(65631234563852, Units.OCTET)).toBe('8.2To');
    });

    test('should convert in To', () => {
        expect(convertFromBits(65631234568343452, Units.OCTET)).toBe(
            '8203.9To'
        );
    });

    test('should convert in byte', () => {
        expect(convertFromBits(656, Units.BYTE)).toBe('82B');
    });

    test('should convert in byte', () => {
        expect(convertFromBits(6563, Units.BYTE)).toBe('820.38B');
    });

    test('should convert in KB', () => {
        expect(convertFromBits(6563123, Units.BYTE)).toBe('820.39KB');
    });

    test('should convert in MB', () => {
        expect(convertFromBits(6563123456, Units.BYTE)).toBe('820.39MB');
    });

    test('should convert in GB', () => {
        expect(convertFromBits(6563123456385, Units.BYTE)).toBe('820.39GB');
    });

    test('should convert in TB', () => {
        expect(convertFromBits(65631234563852, Units.BYTE)).toBe('8.2TB');
    });

    test('should convert in TB', () => {
        expect(convertFromBits(65631234568343452, Units.BYTE)).toBe('8203.9TB');
    });
});

describe('convertFromOctet', () => {
    test('should throw an error if a wrong unit is provided', () => {
        // @ts-expect-error test the case of an invalid unit
        expect(() => convertFromOctet(656, 'TOTO')).toThrowError(
            'Unit not supported!'
        );
    });

    test('should throw an error if no parameter provided', () => {
        // @ts-expect-error test the case of no parameter
        expect(() => convertFromOctet()).toThrowError('Nothing to convert!');
    });

    test('should throw an error if the value is negative', () => {
        expect(() => convertFromOctet(-656)).toThrowError(
            "Value can't be a negative number!"
        );
    });

    test('should convert in octet if no unit is specified', () => {
        expect(convertFromOctet(656)).toBe('656o');
    });

    test('should convert in octet if no unit is specified', () => {
        expect(convertFromOctet(6563)).toBe('6.56Ko');
    });

    test('should convert in octet', () => {
        expect(convertFromOctet(656, Units.OCTET)).toBe('656o');
    });

    test('should convert in Ko', () => {
        expect(convertFromOctet(65631, Units.OCTET)).toBe('65.63Ko');
    });

    test('should convert in Mo', () => {
        expect(convertFromOctet(65631256, Units.OCTET)).toBe('65.63Mo');
    });

    test('should convert in Go', () => {
        expect(convertFromOctet(65631234563, Units.OCTET)).toBe('65.63Go');
    });

    test('should convert in To', () => {
        expect(convertFromOctet(65631234563842, Units.OCTET)).toBe('65.63To');
    });

    test('should convert in To', () => {
        expect(convertFromOctet(6563123456834347, Units.OCTET)).toBe(
            '6563.12To'
        );
    });

    test('should convert in byte', () => {
        expect(convertFromOctet(656, Units.BYTE)).toBe('656B');
    });

    test('should convert in KB', () => {
        expect(convertFromOctet(6563, Units.BYTE)).toBe('6.56KB');
    });

    test('should convert in MB', () => {
        expect(convertFromOctet(6563123, Units.BYTE)).toBe('6.56MB');
    });

    test('should convert in MB', () => {
        expect(convertFromOctet(65631234, Units.BYTE)).toBe('65.63MB');
    });

    test('should convert in GB', () => {
        expect(convertFromOctet(65631234563, Units.BYTE)).toBe('65.63GB');
    });

    test('should convert in TB', () => {
        expect(convertFromOctet(65631234563842, Units.BYTE)).toBe('65.63TB');
    });

    test('should convert in TB', () => {
        expect(convertFromOctet(6563123456834347, Units.BYTE)).toBe(
            '6563.12TB'
        );
    });
});
