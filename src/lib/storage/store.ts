import { STORAGE_AREAS } from './schema';
import type { StorageKey, StorageSchema } from './schema';
import { DEFAULT_PREFERENCES, STORAGE_DEFAULTS } from './defaults';
import type { UserPreferences } from '../types';

/**
 * Typed, area-aware access to chrome.storage. Each key is routed to its
 * configured area (`sync` or `local`); reads of unset keys return a fresh deep
 * copy of the key's default so callers can mutate the result safely.
 */

function areaFor(key: StorageKey): chrome.storage.StorageArea {
  if (typeof chrome === 'undefined' || !chrome.storage) {
    throw new Error('LeetMeow: chrome.storage is unavailable in this context');
  }
  return chrome.storage[STORAGE_AREAS[key]];
}

/** Reads a stored value, returning a fresh copy of the default when unset. */
export async function getValue<K extends StorageKey>(key: K): Promise<StorageSchema[K]> {
  const stored = await areaFor(key).get(key);
  const value = stored[key];
  if (value === undefined) {
    return structuredClone(STORAGE_DEFAULTS[key]);
  }
  // userPreferences is a long-lived settings record that gains new fields over
  // releases. Preferences saved by an older version omit keys that newer code
  // reads (e.g. `lists`), so backfill any missing key from the defaults rather
  // than handing back a partial object that crashes consumers on `.length` etc.
  if (key === 'userPreferences') {
    return { ...DEFAULT_PREFERENCES, ...(value as Partial<UserPreferences>) } as StorageSchema[K];
  }
  return value as StorageSchema[K];
}

/** Writes a value for a single key. */
export async function setValue<K extends StorageKey>(
  key: K,
  value: StorageSchema[K],
): Promise<void> {
  await areaFor(key).set({ [key]: value });
}

/**
 * Reads, transforms, and writes a key. The updater receives the current value
 * (or a default copy) and must return the next value; the next value is
 * returned to the caller.
 */
export async function updateValue<K extends StorageKey>(
  key: K,
  updater: (current: StorageSchema[K]) => StorageSchema[K],
): Promise<StorageSchema[K]> {
  const current = await getValue(key);
  const next = updater(current);
  await setValue(key, next);
  return next;
}

/** Removes a key, reverting it to its default on the next read. */
export async function removeValue(key: StorageKey): Promise<void> {
  await areaFor(key).remove(key);
}
