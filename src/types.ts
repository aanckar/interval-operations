export type IntervalPoint = number | Date;

export type Interval<T extends IntervalPoint = IntervalPoint> = [T, T];
