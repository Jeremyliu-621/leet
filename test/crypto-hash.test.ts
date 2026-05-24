import { describe, it, expect } from 'vitest';
import { hashSecret, verifySecret } from '../src/lib/crypto/hash';

describe('hashSecret', () => {
  it('produces a non-empty hash and salt for any plaintext', async () => {
    const { hash, salt } = await hashSecret('hunter2');
    expect(hash.length).toBeGreaterThan(0);
    expect(salt.length).toBeGreaterThan(0);
  });

  it('uses a fresh salt every call (so identical plaintexts hash differently)', async () => {
    const a = await hashSecret('same');
    const b = await hashSecret('same');
    expect(a.salt).not.toBe(b.salt);
    expect(a.hash).not.toBe(b.hash);
  });

  it('hashes empty strings without throwing', async () => {
    const { hash, salt } = await hashSecret('');
    expect(hash.length).toBeGreaterThan(0);
    expect(salt.length).toBeGreaterThan(0);
  });
});

describe('verifySecret', () => {
  it('returns true for the correct plaintext', async () => {
    const { hash, salt } = await hashSecret('correct horse battery staple');
    expect(await verifySecret('correct horse battery staple', hash, salt)).toBe(true);
  });

  it('returns false for the wrong plaintext', async () => {
    const { hash, salt } = await hashSecret('correct');
    expect(await verifySecret('wrong', hash, salt)).toBe(false);
  });

  it('returns false for an empty stored hash or salt', async () => {
    expect(await verifySecret('whatever', '', 'abc')).toBe(false);
    expect(await verifySecret('whatever', 'abc', '')).toBe(false);
  });

  it('returns false for a malformed (non-base64) salt', async () => {
    expect(await verifySecret('whatever', 'abc', '!!!not-base64!!!')).toBe(false);
  });
});
