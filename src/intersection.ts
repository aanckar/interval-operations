import { Interval } from "./types";
import { sortByStart, sortByEnd } from "./helpers";

export function intersection(...intervals: Interval[]): Interval | null {
  intervals.sort(sortByStart);
  const [start, end] = [
    (intervals[intervals.length - 1] as Interval)[0],
    (intervals.sort(sortByEnd)[0] as Interval)[1],
  ];
  for (let i = 0, n = intervals.length; i < n - 1; i++) {
    const [nextStart, nextEnd] = intervals[i + 1] as Interval;
    if (nextStart > end || nextEnd < start) {
      return null;
    }
  }
  return [start, end];
}

export function arrayIntersection(...arrays: Interval[][]): Interval[] {
  let result = arrays[0] as Interval[];
  for (let i = 1, n = arrays.length; i < n; i++) {
    const array = arrays[i] as Interval[];
    array.sort(sortByStart);
    const tempResult: Interval[] = [];
    for (let j = 0, m = result.length; j < m; j++) {
      const resultInterval = result[j] as Interval;
      for (let k = 0, l = array.length; k < l; k++) {
        const interval = array[k] as Interval;
        // skip intervals to the left
        if (interval[1] <= resultInterval[0]) {
          continue;
        }
        // break if the rest of the intervals are to the right
        if (interval[0] >= resultInterval[1]) {
          break;
        }
        const isect = intersection(resultInterval, interval);
        if (isect) {
          tempResult.push(isect);
        }
      }
    }
    result = tempResult;
  }
  return result.length ? result : [];
}
