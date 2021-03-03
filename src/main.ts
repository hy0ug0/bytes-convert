import roundTwoDigits from './roundTwoDigits';
import { Units } from './Units.enum';
import {
    unitsValues,
    BITS_TO_OCTET,
    MAX_POW,
    INCREMENTAL_POW,
    UNITS_RATIO,
} from './common.const';

// Export Units enum to be used as parameter
export { Units };

// Export convertFromBits function to convert bits to either bytes or octet
export function convertFromBits(
    size: number,
    unit: Units = Units.OCTET
): string {
    // Handle any bad usages of convertFromBits function
    catchUsageErrors(unit, size);

    // Get unit values based on the unit chosen by the user
    const UNITS = unitsValues[unit];
    let e = 0;
    let result: string | null = null;

    UNITS.some((unit) => {
        const tmp = size / (BITS_TO_OCTET * Math.pow(10, e));
        if (tmp < UNITS_RATIO) {
            result = `${roundTwoDigits(tmp)}${unit}`;
            return true;
        } else {
            e += INCREMENTAL_POW;
        }
    });

    return result
        ? result
        : `${roundTwoDigits(size / (BITS_TO_OCTET * Math.pow(10, MAX_POW)))}${
              UNITS[UNITS.length - 1]
          }`;
}

// Export convertFromOctet function to convert octet to either bytes or octet
export function convertFromOctet(
    size: number,
    unit: Units = Units.OCTET
): string {
    // Handle any bad usages of convertFromOctet function
    catchUsageErrors(unit, size);

    // Get unit values based on the unit chosen by the user
    const UNITS = unitsValues[unit];
    let tmp = size;
    let result: string | null = null;

    UNITS.some((unit) => {
        if (tmp < UNITS_RATIO) {
            result = `${roundTwoDigits(tmp)}${unit}`;
            return true;
        }
        tmp = tmp / UNITS_RATIO;
    });

    return result
        ? result
        : `${roundTwoDigits(tmp * UNITS_RATIO)}${UNITS[UNITS.length - 1]}`;
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
