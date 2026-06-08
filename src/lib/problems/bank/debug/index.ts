import type { Problem } from '../../types';

import { problem as twoSumDebug } from './two-sum-debug-off-by-one';
import { problem as runningSumDebug } from './running-sum-debug-wrong-init';
import { problem as reverseStringDebug } from './reverse-string-debug-bounds';
import { problem as binarySearchDebug } from './binary-search-debug-overflow';
import { problem as maxSubarrayDebug } from './max-subarray-debug-logic';
import { problem as validParenthesesDebug } from './valid-parentheses-debug-wrong-check';
import { problem as mergeSortedDebug } from './merge-sorted-arrays-debug-comparison';
import { problem as palindromeDebug } from './palindrome-check-debug-wrong-operator';
import { problem as fibonacciDebug } from './fibonacci-debug-swap';

export const debugProblems: readonly Problem[] = [
  twoSumDebug,
  runningSumDebug,
  reverseStringDebug,
  binarySearchDebug,
  maxSubarrayDebug,
  validParenthesesDebug,
  mergeSortedDebug,
  palindromeDebug,
  fibonacciDebug,
];
