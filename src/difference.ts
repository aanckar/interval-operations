import { Interval, IntervalPoint } from "./types";
import { union } from "./union";
import { hasOverlap } from "./utils";

export function difference<T extends IntervalPoint>(
  a: Interval<T>,
  b: Interval<T>
): Interval<T>[] | null {
  // disjoint
  if (!hasOverlap(a, b)) {
    return [a];
  }
  // b contained in a
  if (b[0] > a[0] && b[1] < a[1]) {
    return [
      [a[0], b[0]],
      [b[1], a[1]],
    ];
  }
  // b contains a
  if (b[0] <= a[0] && b[1] >= a[1]) {
    return null;
  }
  return b[0] > a[0] ? [[a[0], b[0]]] : [[b[1], a[1]]];
}

export function arrayDifference<T extends IntervalPoint>(
  inputIntervals: Interval<T>[],
  inputDiffIntervals: Interval<T>[]
): Interval<T>[] {
  const intervals = union(...inputIntervals);
  const diffIntervals = union(...inputDiffIntervals);
  if (!intervals.length) {
    return [];
  }
  if (!diffIntervals.length) {
    return intervals;
  }
  const result: Interval<T>[] = [];
  for (let i = 0, n = intervals.length; i < n; i++) {
    const currentInterval = intervals[i];
    if (!currentInterval) {
      continue;
    }
    let [start, end] = currentInterval;
    let addInterval = true;
    for (let j = 0, m = diffIntervals.length; j < m; j++) {
      const curr = diffIntervals[j];
      if (!curr) {
        continue;
      }
      // skip intervals to the left
      if (curr[1] <= start) {
        continue;
      }
      // break if the rest of the intervals are to the right
      if (curr[0] >= end) {
        break;
      }
      const diff = difference([start, end], curr);
      const first = diff?.[0];
      const prev = diff ? diff[diff.length - 1] : null;
      if (diff && first && prev) {
        [start, end] = prev;
        if (diff.length > 1) {
          result.push(first);
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
