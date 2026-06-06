// In-memory fakes for the slice of the chrome.* APIs LeetMeow uses, for unit
// and integration tests that run under Node. Behaviours mirror the real APIs
// closely enough that code written against `chrome.*` works unchanged when
// these fakes are installed as the `chrome` global.

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

/** Minimal shape of a chrome.declarativeNetRequest.Rule sufficient for tests. */
export interface FakeDnrRule {
  id: number;
  priority?: number;
  action: { type: string; redirect?: { regexSubstitution?: string } };
  condition: {
    regexFilter?: string;
    resourceTypes?: readonly string[];
    isUrlFilterCaseSensitive?: boolean;
  };
}

/** In-memory stand-in for chrome.declarativeNetRequest's dynamic rule API. */
export class FakeDeclarativeNetRequest {
  private rules: FakeDnrRule[] = [];

  getDynamicRules = async (): Promise<FakeDnrRule[]> => {
    return this.rules.map((rule) => structuredClone(rule));
  };

  updateDynamicRules = async (options: {
    removeRuleIds?: readonly number[];
    addRules?: readonly FakeDnrRule[];
  }): Promise<void> => {
    const remove = new Set(options.removeRuleIds ?? []);
    this.rules = this.rules.filter((rule) => !remove.has(rule.id));
    if (options.addRules) {
      this.rules.push(...options.addRules.map((rule) => structuredClone(rule)));
    }
  };
}

export interface FakeAlarmInfo {
  when?: number;
  periodInMinutes?: number;
  delayInMinutes?: number;
}

/** In-memory stand-in for chrome.alarms. */
export class FakeAlarms {
  scheduled = new Map<string, FakeAlarmInfo>();

  create = (name: string, info: FakeAlarmInfo): void => {
    this.scheduled.set(name, { ...info });
  };

  clear = async (name: string): Promise<boolean> => {
    return this.scheduled.delete(name);
  };

  onAlarm = {
    addListener: (_listener: (alarm: { name: string }) => void): void => {
      /* no-op for tests */
    },
  };
}

interface FakeRuntime {
  id: string;
  getURL: (path: string) => string;
}

export interface FakeChrome {
  storage: {
    sync: FakeStorageArea;
    local: FakeStorageArea;
  };
  declarativeNetRequest: FakeDeclarativeNetRequest;
  alarms: FakeAlarms;
  runtime: FakeRuntime;
}

/** Installs a fresh fake `chrome` on the global object and returns it. */
export function installFakeChrome(): FakeChrome {
  const fake: FakeChrome = {
    storage: { sync: new FakeStorageArea(), local: new FakeStorageArea() },
    declarativeNetRequest: new FakeDeclarativeNetRequest(),
    alarms: new FakeAlarms(),
    runtime: {
      id: 'fakeextensionid',
      getURL: (path) => `chrome-extension://fakeextensionid/${path.replace(/^\//, '')}`,
    },
  };
  (globalThis as { chrome?: unknown }).chrome = fake;
  return fake;
}

/** Removes the fake `chrome` from the global object. */
export function uninstallFakeChrome(): void {
  delete (globalThis as { chrome?: unknown }).chrome;
}
