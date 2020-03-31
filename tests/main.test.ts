import convertBytes from '../src/main';

describe('convertBytes', () => {
    test('convert in octet', () => {
        expect(convertBytes(656)).toBe('656o');
    });

    test('convert in Ko', () => {
        expect(convertBytes(6563)).toBe('6.41Ko');
    });

    test('convert in Mo', () => {
        expect(convertBytes(6563123)).toBe('6.26Mo');
    });

    test('convert in Go', () => {
        expect(convertBytes(6563123456)).toBe('6.11Go');
    });

    test('convert in To', () => {
        expect(convertBytes(6563123456385)).toBe('5.97To');
    });
});
