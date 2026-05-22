import { STORAGE_AREAS } from './schema';
import type { StorageKey, StorageSchema } from './schema';
import { STORAGE_DEFAULTS } from './defaults';

/**
 * Typed, area-aware access to chrome.storage. Each key is routed to its
 * configured area (`sync` or `local`); reads of unset keys return a fresh deep
 * copy of the key's default so callers can mutate the result safely.
 */

function areaFor(key: StorageKey): chrome.storage.StorageArea {
  if (typeof chrome === 'undefined' || !chrome.storage) {
    throw new Error('LeetLock: chrome.storage is unavailable in this context');
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
