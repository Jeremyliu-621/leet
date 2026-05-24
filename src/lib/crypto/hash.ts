// Password and accountability-code hashing for the settings-lock features.
//
// Uses PBKDF2/SHA-256 via SubtleCrypto so it works in the service worker, in
// extension pages, and in modern Node (Node ≥ 20 exposes a global `crypto`).
// Plaintext is never persisted; only the (base64 hash, base64 salt) pair.

const PBKDF2_ITERATIONS = 100_000;
const SALT_BYTES = 16;
const KEY_BITS = 256;

function getSubtle(): SubtleCrypto {
  if (typeof crypto === 'undefined' || crypto.subtle === undefined) {
    throw new Error('LeetLock: SubtleCrypto is not available in this context');
  }
  return crypto.subtle;
}

function getRandom(): Crypto {
  if (typeof crypto === 'undefined' || crypto.getRandomValues === undefined) {
    throw new Error('LeetLock: crypto.getRandomValues is not available');
  }
  return crypto;
}

function bytesToBase64(bytes: ArrayBuffer | Uint8Array): string {
  const view = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let bin = '';
  for (let i = 0; i < view.length; i++) {
    bin += String.fromCharCode(view[i]!);
  }
  return btoa(bin);
}

function base64ToBytes(b64: string): Uint8Array {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) {
    out[i] = bin.charCodeAt(i);
  }
  return out;
}

async function deriveKeyBase64(plaintext: string, saltBytes: Uint8Array): Promise<string> {
  const subtle = getSubtle();
  // Newer lib.d.ts narrows BufferSource to ArrayBufferView<ArrayBuffer>; the
  // `Uint8Array<ArrayBufferLike>` we receive at runtime is structurally valid,
  // so cast at the SubtleCrypto boundary rather than restructuring the buffers.
  const keyMaterial = await subtle.importKey(
    'raw',
    new TextEncoder().encode(plaintext) as BufferSource,
    { name: 'PBKDF2' },
    false,
    ['deriveBits'],
  );
  const bits = await subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: saltBytes as BufferSource,
      iterations: PBKDF2_ITERATIONS,
      hash: 'SHA-256',
    },
    keyMaterial,
    KEY_BITS,
  );
  return bytesToBase64(bits);
}

export interface HashedSecret {
  hash: string;
  salt: string;
}

/** Hashes a password or accountability code with a fresh random salt. */
export async function hashSecret(plaintext: string): Promise<HashedSecret> {
  const random = getRandom();
  const saltBytes = new Uint8Array(SALT_BYTES);
  random.getRandomValues(saltBytes);
  const hash = await deriveKeyBase64(plaintext, saltBytes);
  return { hash, salt: bytesToBase64(saltBytes) };
}

/** Constant-time string equality. Both inputs are base64; same length expected. */
function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

/** Verifies a candidate plaintext against a previously stored hash + salt. */
export async function verifySecret(
  plaintext: string,
  hash: string,
  salt: string,
): Promise<boolean> {
  if (hash.length === 0 || salt.length === 0) {
    return false;
  }
  let saltBytes: Uint8Array;
  try {
    saltBytes = base64ToBytes(salt);
  } catch {
    return false;
  }
  const candidate = await deriveKeyBase64(plaintext, saltBytes);
  return constantTimeEqual(candidate, hash);
}
