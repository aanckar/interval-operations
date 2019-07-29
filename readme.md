# Interval operations

A collection of dependency-free utility functions for performing mathematical set operations on intervals and arrays of intervals.

## Installation

```
npm install interval-operations
// or, with yarn
yarn add interval-operations
```

## Usage

### Union

```
import { union, arrayUnion } from 'interval-operations';

union([1,3], [2,4], [5,7]); // [[1,4], [5,7]]
arrayUnion([[1,3], [5,7]], [[2,4], [6,8]]); // [[1,4], [5,8]]
```

### Intersection

```
import { intersection, arrayIntersection } from 'interval-operations';

intersection([1,3], [2,4]); // [2,3]
intersection([1,2], [3,4]); // null
arrayIntersection([[1,3], [5,7]], [[2,4], [6,8]]); // [[2,3], [5,6]]
```

### Difference

```
import { difference, arrayDifference } from 'interval-operations';

difference([1,3], [2,3]); // [1,2]
arrayDifference([[1,3], [4,6]], [[2,5]]); // [[1,2], [5,6]]
```

### Contains

```
import { contains, arrayContains } from 'interval-operations';

contains([1,3], [2,3]); // true
contains([1,3], [3,4]); // false
arrayContains([[1,3], [2,5]], [[1,5]]); // true
```

### Example with dates

```
const store1Hours = [
  [new Date('2019-03-14 08:00'), new Date('2019-03-14 16:00')],
  [new Date('2019-03-16 10:00'), new Date('2019-03-16 14:00')]
];

const store2Hours = [
  [new Date('2019-03-14 10:00'), new Date('2019-03-14 14:00')],
  [new Date('2019-03-15 08:00'), new Date('2019-03-15 16:00')],
];

// When is at least one store open?
arrayUnion(store1Hours, store2Hours);
/* [
  [new Date('2019-03-14 08:00'), new Date('2019-03-14 16:00')],
  [new Date('2019-03-15 08:00'), new Date('2019-03-15 16:00')],
  [new Date('2019-03-16 10:00'), new Date('2019-03-16 14:00')]
] */

// When are both stores open?
arrayIntersection(store1Hours, store2Hours);
// [[new Date('2019-03-14 10:00'), new Date('2019-03-14 14:00')]]

// When is only store 1 open?
arrayDifference(store1Hours, store2Hours);
/* [
  [new Date('2019-03-14 08:00'), new Date('2019-03-14 10:00')],
  [new Date('2019-03-14 14:00'), new Date('2019-03-14 16:00')],
  [new Date('2019-03-16 10:00'), new Date('2019-03-16 14:00')]
] */
```
