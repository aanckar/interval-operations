import { Interval, IntervalPoint } from "./types";

type SortResult = -1 | 0 | 1;

export function sortByStart<T extends IntervalPoint>(
  a: Interval<T>,
  b: Interval<T>
): SortResult {
  return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
}

export function sortByEnd<T extends IntervalPoint>(
  a: Interval<T>,
  b: Interval<T>
): SortResult {
  return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
}

export function hasOverlap<T extends IntervalPoint>(
  a: Interval<T>,
  b: Interval<T>
): boolean {
  return b[1] > a[0] && b[0] < a[1];
}
