import { Interval } from "./types";

type SortResult = -1 | 0 | 1;

export function sortByStart(a: Interval, b: Interval): SortResult {
  return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
}

export function sortByEnd(a: Interval, b: Interval): SortResult {
  return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
}

export function hasOverlap(a: Interval, b: Interval): boolean {
  return b[1] > a[0] && b[0] < a[1];
}
