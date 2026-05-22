// An in-memory fake of the slice of chrome.storage that LeetLock uses, for
// unit tests that run under Node (where `chrome` does not exist).

type Bag = Record<string, unknown>;

/** In-memory stand-in for a chrome.storage.StorageArea (promise API). */
export class FakeStorageArea {
  private store: Bag = {};

  get = async (keys?: string | string[] | null): Promise<Bag> => {
    if (keys === undefined || keys === null) {
      return structuredClone(this.store);
    }
    const list = typeof keys === 'string' ? [keys] : keys;
    const out: Bag = {};
    for (const key of list) {
      if (Object.prototype.hasOwnProperty.call(this.store, key)) {
        out[key] = structuredClone(this.store[key]);
      }
    }
    return out;
  };

  set = async (items: Bag): Promise<void> => {
    Object.assign(this.store, structuredClone(items));
  };

  remove = async (keys: string | string[]): Promise<void> => {
    const list = typeof keys === 'string' ? [keys] : keys;
    for (const key of list) {
      delete this.store[key];
    }
  };

  clear = async (): Promise<void> => {
    this.store = {};
  };
}

export interface FakeChrome {
  storage: {
    sync: FakeStorageArea;
    local: FakeStorageArea;
  };
}

/** Installs a fresh fake `chrome` on the global object and returns it. */
export function installFakeChrome(): FakeChrome {
  const fake: FakeChrome = {
    storage: { sync: new FakeStorageArea(), local: new FakeStorageArea() },
  };
  (globalThis as { chrome?: unknown }).chrome = fake;
  return fake;
}

/** Removes the fake `chrome` from the global object. */
export function uninstallFakeChrome(): void {
  delete (globalThis as { chrome?: unknown }).chrome;
}
