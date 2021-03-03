import { Units } from './Units.enum';

export const unitsValues = {
    [Units.BYTE]: ['B', 'KB', 'MB', 'GB', 'TB'],
    [Units.OCTET]: ['o', 'Ko', 'Mo', 'Go', 'To'],
};

export const BITS_TO_OCTET = 8;
export const INCREMENTAL_POW = 3;
export const MAX_POW = 12;
export const UNITS_RATIO = 1000;
