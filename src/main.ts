import roundTwoDigits from './roundTwoDigits';
import { Units } from './Units.enum';
import { unitsValues, BITS_TO_OCTET } from './common.const';

// Export Units enum to be used as parameter
export { Units };

// Export convert function to convert bits to either bytes or octet
export function convert(size: number, unit: Units = Units.OCTET): string {
    // Handle any bad usages of convert function
    catchUsageErrors(unit, size);

    // Get unit values based on the unit chosen by the user
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

function catchUsageErrors(unit: Units, size: number) {
    if (unit !== Units.BYTE && unit !== Units.OCTET) {
        throw new Error('Unit not supported!');
    }

    if (!size) {
        throw new Error('Nothing to convert!');
    }

    if (size < 0) {
        throw new Error("Value can't be a negative number!");
    }
}
