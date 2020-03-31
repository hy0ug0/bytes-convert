import roundTwoDigits from './roundTwoDigits';

export default function convertBytes(size: number): string {
    const BYTES_TO_OCTET = 1024;
    const UNITS = ['Ko', 'Mo', 'Go', 'To'];

    if (!size) {
        throw new Error('Nothing to convert!');
    }

    let tmp = size;

    if (tmp < BYTES_TO_OCTET) {
        return `${roundTwoDigits(tmp)}o`;
    }

    let result: string;
    UNITS.some((unit) => {
        tmp = tmp / BYTES_TO_OCTET;
        if (tmp < BYTES_TO_OCTET) {
            result = `${roundTwoDigits(tmp)}${unit}`;
            return true;
        }
    });

    return result ? result : `${roundTwoDigits(tmp)}${UNITS[UNITS.length - 1]}`;
}
