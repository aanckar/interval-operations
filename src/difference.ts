import { Interval } from './types';
import { union } from './union';
import { hasOverlap } from './helpers';

export function difference(a: Interval, b: Interval): Interval[] | null {
  // disjoint
  if (!hasOverlap(a, b)) {
    return [a];
  }
  // b contained in a
  if (b[0] > a[0] && b[1] < a[1]) {
    return [[a[0], b[0]], [b[1], a[1]]];
  }
  // b contains a
  if (b[0] <= a[0] && b[1] >= a[1]) {
    return null;
  }
  return b[0] > a[0] ? [[a[0], b[0]]] : [[b[1], a[1]]];
}

export function arrayDifference(
  inputIntervals: Interval[],
  inputDiffIntervals: Interval[]
): Interval[] {
  const intervals = union(...inputIntervals);
  const diffIntervals = union(...inputDiffIntervals);
  if (!intervals) {
    return [];
  }
  if (!diffIntervals) {
    return intervals;
  }
  const result = [];
  for (let i = 0, n = intervals.length; i < n; i++) {
    let [start, end] = intervals[i];
    let addInterval = true;
    for (let j = 0, m = diffIntervals.length; j < m; j++) {
      const diffInterval = diffIntervals[j];
      // skip intervals to the left
      if (diffInterval[1] <= start) {
        continue;
      }
      // break if the rest of the intervals are to the right
      if (diffInterval[0] >= end) {
        break;
      }
      const diff = difference([start, end], diffInterval);
      if (diff) {
        [start, end] = diff[diff.length - 1];
        if (diff.length > 1) {
          result.push(diff[0]);
        }
      } else {
        addInterval = false;
        break;
      }
    }
    if (addInterval) {
      result.push([start, end]);
    }
  }
  return result;
}
