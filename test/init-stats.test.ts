import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { installFakeChrome, uninstallFakeChrome } from './helpers/fake-chrome';
import { readInitStats, recordPythonBoot, recordPythonRun } from '../src/lib/runner/init-stats';

describe('runner init-stats ring buffer', () => {
  beforeEach(() => {
    installFakeChrome();
  });
  afterEach(() => {
    uninstallFakeChrome();
  });

  it('returns empty stats on first read', async () => {
    const stats = await readInitStats();
    expect(stats.firstBootMs).toBe(null);
    expect(stats.runs).toBe(0);
  });

  it('persists the rounded boot duration', async () => {
    await recordPythonBoot(1234.7);
    const stats = await readInitStats();
    expect(stats.firstBootMs).toBe(1235);
  });

  it('overwrites firstBootMs on a subsequent boot', async () => {
    await recordPythonBoot(1000);
    await recordPythonBoot(900);
    const stats = await readInitStats();
    expect(stats.firstBootMs).toBe(900);
  });

  it('rejects non-finite or negative durations', async () => {
    await recordPythonBoot(Number.NaN);
    await recordPythonBoot(Number.POSITIVE_INFINITY);
    await recordPythonBoot(-1);
    const stats = await readInitStats();
    expect(stats.firstBootMs).toBe(null);
  });

  it('increments the lifetime run counter', async () => {
    await recordPythonRun();
    await recordPythonRun();
    await recordPythonRun();
    const stats = await readInitStats();
    expect(stats.runs).toBe(3);
  });

  it('returns empty stats when chrome.storage is unavailable', async () => {
    uninstallFakeChrome();
    const stats = await readInitStats();
    expect(stats.firstBootMs).toBe(null);
    expect(stats.runs).toBe(0);
  });

  it('survives an unrelated payload shape in storage', async () => {
    // Simulate a stale or corrupted entry.
    await chrome.storage.local.set({ _pyodideInitStats: { firstBootMs: 'nope', runs: 'huh' } });
    const stats = await readInitStats();
    expect(stats.firstBootMs).toBe(null);
    expect(stats.runs).toBe(0);
  });
});
