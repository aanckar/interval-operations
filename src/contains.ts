import { Interval } from "./types";
import { arrayUnion } from "./union";

export function contains(
  outerInterval: Interval,
  innerInterval: Interval
): boolean {
  return (
    innerInterval[0] >= outerInterval[0] && innerInterval[1] <= outerInterval[1]
  );
}

export function arrayContains(
  outerIntervals: Interval[],
  innerIntervals: Interval[]
): boolean {
  outerIntervals = arrayUnion(outerIntervals);
  innerIntervals = arrayUnion(innerIntervals);
  for (let i = 0, n = innerIntervals.length; i < n; i++) {
    let isContained = false;
    for (let j = 0, m = outerIntervals.length; j < m; j++) {
      if (contains(outerIntervals[j], innerIntervals[i])) {
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
