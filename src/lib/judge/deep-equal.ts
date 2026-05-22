/**
 * Deep structural equality for the values coding problems produce: primitives,
 * arrays, and plain objects. Treats `NaN` as equal to `NaN`. Does not attempt
 * to compare Maps, Sets, class instances, or functions — problems in the bank
 * return JSON-shaped data only.
 */
export function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) {
    return true;
  }

  // NaN is the one primitive that is not `===` to itself.
  if (typeof a === 'number' && typeof b === 'number') {
    return Number.isNaN(a) && Number.isNaN(b);
  }

  // Past this point only two non-null objects can still be equal.
  if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
    return false;
  }

  const aIsArray = Array.isArray(a);
  const bIsArray = Array.isArray(b);
  if (aIsArray !== bIsArray) {
    return false;
  }

  if (aIsArray && bIsArray) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }

  const aObject = a as Record<string, unknown>;
  const bObject = b as Record<string, unknown>;
  const aKeys = Object.keys(aObject);
  const bKeys = Object.keys(bObject);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  for (const key of aKeys) {
    if (!Object.prototype.hasOwnProperty.call(bObject, key)) {
      return false;
    }
    if (!deepEqual(aObject[key], bObject[key])) {
      return false;
    }
  }
  return true;
}
