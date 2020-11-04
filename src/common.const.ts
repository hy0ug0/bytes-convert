import { Units } from './Units.enum';

export const unitsValues = {
    [Units.BYTE]: ['KB', 'MB', 'GB', 'TB'],
    [Units.OCTET]: ['Ko', 'Mo', 'Go', 'To'],
};

export const BITS_TO_OCTET = 1024;
