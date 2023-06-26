import { Interval, IntervalPoint } from "./types";
import { arrayUnion } from "./union";

export function contains<T extends IntervalPoint>(
  outerInterval: Interval<T>,
  innerInterval: Interval<T>
): boolean {
  return (
    innerInterval[0] >= outerInterval[0] && innerInterval[1] <= outerInterval[1]
  );
}

export function arrayContains<T extends IntervalPoint>(
  outerIntervals: Interval<T>[],
  innerIntervals: Interval<T>[]
): boolean {
  outerIntervals = arrayUnion(outerIntervals);
  innerIntervals = arrayUnion(innerIntervals);
  for (let i = 0, n = innerIntervals.length; i < n; i++) {
    const inner = innerIntervals[i] as Interval;
    let isContained = false;
    for (let j = 0, m = outerIntervals.length; j < m; j++) {
      const outer = outerIntervals[j] as Interval;
      if (contains(outer, inner)) {
        isContained = true;
        break;
      }
    }
    if (!isContained) {
      return false;
    }
  }
  return true;
}
