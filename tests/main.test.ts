import convertBytes from '../src/main';

describe('convertBytes', () => {
    test('should throw an error if no parameter provided', () => {
        expect(convertBytes).toThrowError('Nothing to convert!');
    });

    test('should throw an error if the value is negative', () => {
        expect(() => convertBytes(-656)).toThrowError(
            "Value can't be a negative number!"
        );
    });

    test('should convert in octet', () => {
        expect(convertBytes(656)).toBe('656o');
    });

    test('should convert in Ko', () => {
        expect(convertBytes(6563)).toBe('6.41Ko');
    });

    test('should convert in Mo', () => {
        expect(convertBytes(6563123)).toBe('6.26Mo');
    });

    test('should convert in Go', () => {
        expect(convertBytes(6563123456)).toBe('6.11Go');
    });

    test('should convert in To', () => {
        expect(convertBytes(6563123456385)).toBe('5.97To');
    });
});
