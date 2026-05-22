import type { Problem } from '../types';

// arrays
import { problem as runningSum } from './running-sum';
import { problem as peakElementCount } from './peak-element-count';
import { problem as rotateLeftOne } from './rotate-left-one';

// strings
import { problem as vowelTally } from './vowel-tally';
import { problem as reverseWordsOrder } from './reverse-words-order';
import { problem as isPalindromeClean } from './is-palindrome-clean';

// hash-map
import { problem as firstUniqueChar } from './first-unique-char';
import { problem as twoSumIndices } from './two-sum-indices';
import { problem as mostFrequentValue } from './most-frequent-value';

// two-pointers
import { problem as reverseArrayInplace } from './reverse-array-inplace';
import { problem as sortedPairExists } from './sorted-pair-exists';
import { problem as mergeSortedLists } from './merge-sorted-lists';

// sliding-window
import { problem as maxWindowSum } from './max-window-sum';
import { problem as longestEqualRun } from './longest-equal-run';
import { problem as minWindowAverage } from './min-window-average';

// binary-search
import { problem as findTargetIndex } from './find-target-index';
import { problem as integerSquareRoot } from './integer-square-root';
import { problem as firstNotSmaller } from './first-not-smaller';

// stack
import { problem as balancedBrackets } from './balanced-brackets';
import { problem as removeAdjacentDupes } from './remove-adjacent-dupes';
import { problem as nextGreaterElement } from './next-greater-element';

// math
import { problem as digitSum } from './digit-sum';
import { problem as isPrimeNumber } from './is-prime-number';
import { problem as greatestCommonDivisor } from './greatest-common-divisor';

export const problems: readonly Problem[] = [
  runningSum,
  peakElementCount,
  rotateLeftOne,
  vowelTally,
  reverseWordsOrder,
  isPalindromeClean,
  firstUniqueChar,
  twoSumIndices,
  mostFrequentValue,
  reverseArrayInplace,
  sortedPairExists,
  mergeSortedLists,
  maxWindowSum,
  longestEqualRun,
  minWindowAverage,
  findTargetIndex,
  integerSquareRoot,
  firstNotSmaller,
  balancedBrackets,
  removeAdjacentDupes,
  nextGreaterElement,
  digitSum,
  isPrimeNumber,
  greatestCommonDivisor,
];
