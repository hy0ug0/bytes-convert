import roundTwoDigits from './roundTwoDigits';
import { Units } from './Units.enum';

export { Units };

export function convert(size: number, unit: Units = Units.OCTET): string {
    if (unit !== Units.BYTE && unit !== Units.OCTET) {
        throw new Error('Unit not supported!');
    }

    if (!size) {
        throw new Error('Nothing to convert!');
    }

    if (size < 0) {
        throw new Error("Value can't be a negative number!");
    }

    const unitsValues = {
        [Units.BYTE]: ['KB', 'MB', 'GB', 'TB'],
        [Units.OCTET]: ['Ko', 'Mo', 'Go', 'To'],
    };
    const BITS_TO_OCTET = 1024;
    const UNITS = unitsValues[unit];

    let tmp = size;

    if (tmp < BITS_TO_OCTET) {
        return `${roundTwoDigits(tmp)}${unit === Units.OCTET ? 'o' : 'B'}`;
    }

    let result: string | null = null;
    UNITS.some((unit) => {
        tmp = tmp / BITS_TO_OCTET;
        if (tmp < BITS_TO_OCTET) {
            result = `${roundTwoDigits(tmp)}${unit}`;
            return true;
        }
    });

    return result ? result : `${roundTwoDigits(tmp)}${UNITS[UNITS.length - 1]}`;
}
