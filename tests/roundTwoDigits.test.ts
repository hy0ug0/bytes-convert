import roundTwoDigits from '../src/roundTwoDigits';

describe('roundTwoDigits', () => {
    test('round to 2 digits', () => {
        expect(roundTwoDigits(1.2329834)).toBe(1.23);
        expect(roundTwoDigits(3456.9834)).toBe(3456.98);
        expect(roundTwoDigits(1.009834)).toBe(1.01);
    });
});
