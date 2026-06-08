import { describe, it, expect, vi, afterEach } from 'vitest';
import { sendFeedbackEmail } from '../src/lib/feedback/send';

const ENDPOINT = 'https://api.web3forms.com/submit';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('sendFeedbackEmail', () => {
  it('is a no-op when no keys are configured', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    const result = await sendFeedbackEmail('hi', null, []);
    expect(result).toEqual({ delivered: false });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('POSTs one request per recipient key with the message and access key', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal('fetch', fetchMock);

    const result = await sendFeedbackEmail('great app', 'me@example.com', ['key-a', 'key-b']);

    expect(result).toEqual({ delivered: true });
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock).toHaveBeenCalledWith(ENDPOINT, expect.objectContaining({ method: 'POST' }));

    const bodies = fetchMock.mock.calls.map((c) => JSON.parse((c[1] as RequestInit).body as string));
    expect(bodies.map((b) => b.access_key).sort()).toEqual(['key-a', 'key-b']);
    for (const b of bodies) {
      expect(b.message).toBe('great app');
      expect(b.replyto).toBe('me@example.com');
    }
  });

  it('omits replyto when no email is given', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal('fetch', fetchMock);
    await sendFeedbackEmail('anon feedback', null, ['key-a']);
    const body = JSON.parse((fetchMock.mock.calls[0]![1] as RequestInit).body as string);
    expect('replyto' in body).toBe(false);
  });

  it('reports delivered when at least one inbox accepts, even if another fails', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce({ ok: false })
      .mockResolvedValueOnce({ ok: true });
    vi.stubGlobal('fetch', fetchMock);
    const result = await sendFeedbackEmail('msg', null, ['bad', 'good']);
    expect(result).toEqual({ delivered: true });
  });

  it('does not throw and reports not-delivered when the network errors', async () => {
    const fetchMock = vi.fn().mockRejectedValue(new Error('offline'));
    vi.stubGlobal('fetch', fetchMock);
    const result = await sendFeedbackEmail('msg', null, ['key-a']);
    expect(result).toEqual({ delivered: false });
  });
});
