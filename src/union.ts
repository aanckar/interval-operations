import { Interval } from './types';
import { sortByStart } from './helpers';

export function union(...intervals: Interval[]): Interval[] | null {
  if (!intervals.length) {
    return null;
  }
  intervals = intervals.sort(sortByStart);
  const result = [];
  let [start, end] = intervals[0];
  for (let i = 1, n = intervals.length; i < n; i++) {
    const [nextStart, nextEnd] = intervals[i];
    if (end < nextStart) {
      result.push([start, end]);
      start = nextStart;
    }
    if (end < nextEnd) {
      end = nextEnd;
    }
  }
  return [...result, [start, end]];
}

export function arrayUnion(...arrays: Interval[][]): Interval[] {
  if (!arrays.length) {
    return [];
  }
  let flattenedIntervals = [];
  for (let i = 0, n = arrays.length; i < n; i++) {
    flattenedIntervals = flattenedIntervals.concat(arrays[i]);
  }
  return union(...flattenedIntervals);
}
