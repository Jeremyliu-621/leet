import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-orders-in-the-backlog',
  title: 'Number of Orders in the Backlog',
  difficulty: 'medium',
  tags: ['heap', 'simulation'],
  description: `You are given a 2D integer array \`orders\`, where \`orders[i] = [price, amount, orderType]\`.

- \`orderType == 0\`: a **buy** order — willing to buy \`amount\` units at any price **≤ price**.
- \`orderType == 1\`: a **sell** order — willing to sell \`amount\` units at any price **≥ price**.

When a new order arrives it is matched greedily:
- A buy order matches with the **cheapest** available sell orders whose price ≤ the buy price.
- A sell order matches with the **most expensive** available buy orders whose price ≥ the sell price.

Matched units are consumed from both orders. Any remaining amount stays in the backlog.

Return the **total number of unmatched orders** in the backlog after processing all orders, modulo \`10^9 + 7\`.`,
  constraints: [
    '1 ≤ orders.length ≤ 10^5',
    'orders[i].length == 3',
    '1 ≤ price, amount ≤ 10^9',
    'orderType is 0 or 1',
  ],
  examples: [
    {
      input: 'orders = [[10,5,0],[15,2,1],[25,1,1],[30,4,0]]',
      output: '6',
      explanation: 'After all orders the buy backlog has 5 units at price 10 and 1 unit at price 30. Total = 6.',
    },
    {
      input: 'orders = [[7,1000000000,1],[15,3,0],[5,999999995,0],[5,1,1]]',
      output: '999999984',
    },
  ],
  hints: [
    'To efficiently find the cheapest unmatched sell or the most expensive unmatched buy, use a min-heap for sell orders (keyed by price) and a max-heap for buy orders (keyed by price).',
    'For each buy order, pop from the sell min-heap while the top price ≤ buy price and amount remains; for each sell order, pop from the buy max-heap while the top price ≥ sell price and amount remains.',
    'Push any leftover amount back onto the appropriate heap. After all orders, sum all remaining amounts mod 10^9 + 7.',
  ],
  functionName: 'getNumberOfBacklogOrders',
  params: ['orders'],
  starterCode: {
    javascript: `function getNumberOfBacklogOrders(orders) {
  const MOD = 1e9 + 7;
  class Heap {
    constructor(cmp) { this._h = []; this._cmp = cmp; }
    push(x) { this._h.push(x); this._up(this._h.length - 1); }
    pop() { const top = this._h[0]; const last = this._h.pop(); if (this._h.length) { this._h[0] = last; this._down(0); } return top; }
    peek() { return this._h[0]; }
    size() { return this._h.length; }
    _up(i) { while (i > 0) { const p = (i - 1) >> 1; if (this._cmp(this._h[i], this._h[p]) < 0) { [this._h[i], this._h[p]] = [this._h[p], this._h[i]]; i = p; } else break; } }
    _down(i) { const n = this._h.length; while (true) { let s = i, l = 2*i+1, r = 2*i+2; if (l < n && this._cmp(this._h[l], this._h[s]) < 0) s = l; if (r < n && this._cmp(this._h[r], this._h[s]) < 0) s = r; if (s === i) break; [this._h[i], this._h[s]] = [this._h[s], this._h[i]]; i = s; } }
  }
  const sells = new Heap((a, b) => a[0] - b[0]);
  const buys = new Heap((a, b) => b[0] - a[0]);
  for (let [price, amount, type] of orders) {
    if (type === 0) {
      while (amount > 0 && sells.size() && sells.peek()[0] <= price) {
        const [sp, sa] = sells.pop();
        const take = Math.min(amount, sa);
        amount -= take;
        if (sa > take) sells.push([sp, sa - take]);
      }
      if (amount > 0) buys.push([price, amount]);
    } else {
      while (amount > 0 && buys.size() && buys.peek()[0] >= price) {
        const [bp, ba] = buys.pop();
        const take = Math.min(amount, ba);
        amount -= take;
        if (ba > take) buys.push([bp, ba - take]);
      }
      if (amount > 0) sells.push([price, amount]);
    }
  }
  let total = 0;
  for (const [, a] of buys._h) total = (total + a) % MOD;
  for (const [, a] of sells._h) total = (total + a) % MOD;
  return total;
}`,
    typescript: `function getNumberOfBacklogOrders(orders: number[][]): number {
  const MOD = 1e9 + 7;
  class Heap {
    _h: number[][] = [];
    _cmp: (a: number[], b: number[]) => number;
    constructor(cmp: (a: number[], b: number[]) => number) { this._cmp = cmp; }
    push(x: number[]) { this._h.push(x); this._up(this._h.length - 1); }
    pop(): number[] { const top = this._h[0]!; const last = this._h.pop()!; if (this._h.length) { this._h[0] = last; this._down(0); } return top; }
    peek(): number[] { return this._h[0]!; }
    size() { return this._h.length; }
    _up(i: number) { while (i > 0) { const p = (i - 1) >> 1; if (this._cmp(this._h[i]!, this._h[p]!) < 0) { [this._h[i], this._h[p]] = [this._h[p]!, this._h[i]!]; i = p; } else break; } }
    _down(i: number) { const n = this._h.length; while (true) { let s = i, l = 2*i+1, r = 2*i+2; if (l < n && this._cmp(this._h[l]!, this._h[s]!) < 0) s = l; if (r < n && this._cmp(this._h[r]!, this._h[s]!) < 0) s = r; if (s === i) break; [this._h[i], this._h[s]] = [this._h[s]!, this._h[i]!]; i = s; } }
  }
  const sells = new Heap((a, b) => a[0]! - b[0]!);
  const buys = new Heap((a, b) => b[0]! - a[0]!);
  for (let [price, amount, type] of orders) {
    price = price!; amount = amount!; type = type!;
    if (type === 0) {
      while (amount > 0 && sells.size() && sells.peek()[0]! <= price) {
        const [sp, sa] = sells.pop() as [number, number];
        const take = Math.min(amount, sa);
        amount -= take;
        if (sa > take) sells.push([sp, sa - take]);
      }
      if (amount > 0) buys.push([price, amount]);
    } else {
      while (amount > 0 && buys.size() && buys.peek()[0]! >= price) {
        const [bp, ba] = buys.pop() as [number, number];
        const take = Math.min(amount, ba);
        amount -= take;
        if (ba > take) buys.push([bp, ba - take]);
      }
      if (amount > 0) sells.push([price, amount]);
    }
  }
  let total = 0;
  for (const [, a] of buys._h) total = (total + a!) % MOD;
  for (const [, a] of sells._h) total = (total + a!) % MOD;
  return total;
}`,
    python: `def getNumberOfBacklogOrders(orders):
    import heapq
    MOD = 10**9 + 7
    orders_list = [list(o) for o in (orders.to_py() if hasattr(orders, 'to_py') else orders)]
    sells = []
    buys = []
    for price, amount, typ in orders_list:
        price, amount, typ = int(price), int(amount), int(typ)
        if typ == 0:
            while amount > 0 and sells and sells[0][0] <= price:
                sp, sa = heapq.heappop(sells)
                take = min(amount, sa)
                amount -= take
                if sa > take:
                    heapq.heappush(sells, [sp, sa - take])
            if amount > 0:
                heapq.heappush(buys, [-price, amount])
        else:
            while amount > 0 and buys and -buys[0][0] >= price:
                bp, ba = heapq.heappop(buys)
                take = min(amount, ba)
                amount -= take
                if ba > take:
                    heapq.heappush(buys, [bp, ba - take])
            if amount > 0:
                heapq.heappush(sells, [price, amount])
    total = 0
    for _, a in buys: total = (total + a) % MOD
    for _, a in sells: total = (total + a) % MOD
    return total`,
  },
  visibleTests: [
    { args: [[[10, 5, 0], [15, 2, 1], [25, 1, 1], [30, 4, 0]]], expected: 6 },
    { args: [[[7, 1000000000, 1], [15, 3, 0], [5, 999999995, 0], [5, 1, 1]]], expected: 999999984 },
    { args: [[[1, 1, 0]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1, 1, 1]]], expected: 1 },
    { args: [[[5, 3, 0], [5, 3, 1]]], expected: 0 },
    { args: [[[5, 3, 0], [6, 3, 1]]], expected: 6 },
    { args: [[[1, 1, 0], [2, 1, 0], [1, 1, 1]]], expected: 1 },
    { args: [[[3, 10, 0], [5, 3, 1], [2, 4, 0], [1, 6, 1]]], expected: 11 },
    { args: [[[10, 2, 1], [10, 2, 0]]], expected: 0 },
    { args: [[[5, 3, 0], [4, 1, 1], [3, 2, 0]]], expected: 4 },
  ],
};
