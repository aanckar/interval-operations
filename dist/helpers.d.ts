import { Interval } from './types';
declare type SortResult = -1 | 0 | 1;
export declare function sortByStart(a: Interval, b: Interval): SortResult;
export declare function sortByEnd(a: Interval, b: Interval): SortResult;
export declare function hasOverlap(a: Interval, b: Interval): boolean;
export {};
