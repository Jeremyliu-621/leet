import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-movie-rental-system',
  title: 'Design Movie Rental System',
  difficulty: 'hard',
  tags: ['design', 'arrays', 'hash-map', 'binary-search'],
  description: `You have a movie renting company consisting of \`n\` shops. You want to implement a movie renting system that supports querying, booking, and returning movies. The system should also support generating a report of the currently rented movies.

Each shop has some movies to rent and each movie has a price associated with it. Movies from the same shop have different prices.

Implement the \`MovieRentingSystem\` class:
- \`MovieRentingSystem(int n, int[][] entries)\` Initializes the system with \`n\` shops and all the given movie entries where \`entries[i] = [shop_i, movie_i, price_i]\`.
- \`List<Integer> search(int movie)\` Returns a list of the **top 5 cheapest shops** that have an unrented copy of the given movie. The shops should be sorted by price and by shop ID in case of tie. If fewer than 5 shops have the movie, return all of them.
- \`void rent(int shop, int movie)\` Rents the given movie from the given shop.
- \`void drop(int shop, int movie)\` Drops off a copy of a movie at the given shop.
- \`List<Integer> report()\` Returns a list of the **cheapest 5 rented movies** (in the form \`[shop, movie]\`) currently rented. The entries should be sorted by price, then by shop ID, then by movie ID in case of ties. If fewer than 5 movies are rented, return all of them.

Simulate operations and return results of \`search\` and \`report\` calls.`,
  constraints: [
    '1 <= n <= 3 * 10^5',
    '1 <= entries.length <= 10^5',
    '0 <= shop_i < n',
    '1 <= movie_i, price_i <= 10^4',
    'Each shop carries at most one copy of a movie.',
    'At most 10^5 calls to search, rent, drop, and report.',
  ],
  examples: [
    {
      input: 'n=3, entries=[[0,1,5],[0,2,6],[0,3,7],[1,1,4],[1,2,7],[2,1,5]], ops=[["search",1],["rent",[0,1]],["rent",[1,2]],["report"],["drop",[1,2]],["search",2]]',
      output: '[[1,0,2],[0,1]],[1,2]]',
      explanation: 'search(1): shops with movie 1 unrented: shop0(5), shop1(4), shop2(5). Sort by price then shop: [1,0,2]. rent(0,1): remove shop0 movie1. rent(1,2): remove shop1 movie2. report: rented=[shop0 movie1 price5, shop1 movie2 price7]. Cheapest=[0,1]. drop(1,2): return. search(2): unrented movie2: shop0(6), shop1(7). Top5=[0,1].',
    },
  ],
  hints: [
    'For each movie, maintain a sorted set of (price, shop) for unrented copies. For search(movie), take up to 5 smallest entries.',
    'Maintain a sorted set of (price, shop, movie) for currently rented copies. For report(), take up to 5 smallest entries.',
    'For rent(shop, movie): remove from the movie\'s unrented set, add to rented set. For drop(shop, movie): remove from rented set, add to movie\'s unrented set. Store price in a hash map (shop, movie) → price for O(1) lookup.',
  ],
  functionName: 'movieRentalSystem',
  params: ['n', 'entries', 'ops'],
  starterCode: {
    javascript: `function movieRentalSystem(n, entries, ops) {
  // price lookup: [shop][movie] -> price
  const priceMap = new Map(); // 'shop,movie' -> price
  // unrented[movie] = sorted set of [price, shop] (simulated with sorted array)
  const unrented = new Map(); // movie -> sorted array of [price, shop]
  // rented: sorted array of [price, shop, movie]
  const rented = [];
  const rentedSet = new Set(); // 'shop,movie' to check

  function cmpPS(a, b) { return a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]; }
  function cmpPSM(a, b) {
    if (a[0] !== b[0]) return a[0] - b[0];
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[2] - b[2];
  }
  function insSort(arr, item, cmp) {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (cmp(arr[mid], item) < 0) lo = mid + 1; else hi = mid;
    }
    arr.splice(lo, 0, item);
  }
  function delSort(arr, item, cmp) {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      const c = cmp(arr[mid], item);
      if (c < 0) lo = mid + 1; else if (c > 0) hi = mid; else { arr.splice(mid, 1); return; }
    }
  }

  for (const [shop, movie, price] of entries) {
    const key = shop + ',' + movie;
    priceMap.set(key, price);
    if (!unrented.has(movie)) unrented.set(movie, []);
    insSort(unrented.get(movie), [price, shop], cmpPS);
  }

  const result = [];
  for (const op of ops) {
    if (op[0] === 'search') {
      const movie = op[1];
      const arr = unrented.get(movie) ?? [];
      result.push(arr.slice(0, 5).map(([, s]) => s));
    } else if (op[0] === 'rent') {
      const [shop, movie] = op[1];
      const price = priceMap.get(shop + ',' + movie);
      delSort(unrented.get(movie) ?? [], [price, shop], cmpPS);
      insSort(rented, [price, shop, movie], cmpPSM);
      rentedSet.add(shop + ',' + movie);
    } else if (op[0] === 'drop') {
      const [shop, movie] = op[1];
      const price = priceMap.get(shop + ',' + movie);
      delSort(rented, [price, shop, movie], cmpPSM);
      rentedSet.delete(shop + ',' + movie);
      if (!unrented.has(movie)) unrented.set(movie, []);
      insSort(unrented.get(movie), [price, shop], cmpPS);
    } else { // report
      result.push(rented.slice(0, 5).map(([, s, m]) => [s, m]));
    }
  }
  return result;
}`,
    typescript: `function movieRentalSystem(n: number, entries: number[][], ops: (string | (string | number[] | number)[])[]) {
  const priceMap = new Map<string, number>();
  const unrented = new Map<number, number[][]>();
  const rented: number[][] = [];
  function cmpPS(a: number[], b: number[]): number { return a[0]! !== b[0]! ? a[0]! - b[0]! : a[1]! - b[1]!; }
  function cmpPSM(a: number[], b: number[]): number {
    if (a[0]! !== b[0]!) return a[0]! - b[0]!;
    if (a[1]! !== b[1]!) return a[1]! - b[1]!;
    return a[2]! - b[2]!;
  }
  function insSort(arr: number[][], item: number[], cmp: (a: number[], b: number[]) => number): void {
    let lo = 0, hi = arr.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (cmp(arr[mid]!, item) < 0) lo = mid + 1; else hi = mid; }
    arr.splice(lo, 0, item);
  }
  function delSort(arr: number[][], item: number[], cmp: (a: number[], b: number[]) => number): void {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      const c = cmp(arr[mid]!, item);
      if (c < 0) lo = mid + 1; else if (c > 0) hi = mid; else { arr.splice(mid, 1); return; }
    }
  }
  for (const [shop, movie, price] of entries) {
    priceMap.set(shop + ',' + movie, price!);
    if (!unrented.has(movie!)) unrented.set(movie!, []);
    insSort(unrented.get(movie!)!, [price!, shop!], cmpPS);
  }
  const result: (number[] | number[][])[] = [];
  for (const op of ops) {
    const opArr = op as (string | number | number[])[];
    if (opArr[0] === 'search') {
      const movie = opArr[1] as number;
      const arr = unrented.get(movie) ?? [];
      result.push(arr.slice(0, 5).map(([, s]) => s!));
    } else if (opArr[0] === 'rent') {
      const [shop, movie] = opArr[1] as number[];
      const price = priceMap.get(shop + ',' + movie)!;
      delSort(unrented.get(movie!)!, [price, shop!], cmpPS);
      insSort(rented, [price, shop!, movie!], cmpPSM);
    } else if (opArr[0] === 'drop') {
      const [shop, movie] = opArr[1] as number[];
      const price = priceMap.get(shop + ',' + movie)!;
      delSort(rented, [price, shop!, movie!], cmpPSM);
      if (!unrented.has(movie!)) unrented.set(movie!, []);
      insSort(unrented.get(movie!)!, [price, shop!], cmpPS);
    } else {
      result.push(rented.slice(0, 5).map(([, s, m]) => [s!, m!]));
    }
  }
  return result;
}`,
    python: `def movieRentalSystem(n: int, entries: list[list[int]], ops: list) -> list:
    import bisect
    price_map = {}
    unrented = {}  # movie -> sorted list of (price, shop)
    rented = []    # sorted list of (price, shop, movie)
    for shop, movie, price in entries:
        price_map[(shop, movie)] = price
        if movie not in unrented:
            unrented[movie] = []
        bisect.insort(unrented[movie], (price, shop))
    result = []
    for raw_op in ops:
        op = raw_op.to_py() if hasattr(raw_op, 'to_py') else raw_op
        if op[0] == 'search':
            movie = int(op[1])
            arr = unrented.get(movie, [])
            result.append([s for _, s in arr[:5]])
        elif op[0] == 'rent':
            params = list(op[1]) if not isinstance(op[1], list) else op[1]
            shop, movie = int(params[0]), int(params[1])
            price = price_map[(shop, movie)]
            entry = (price, shop)
            idx = bisect.bisect_left(unrented.get(movie, []), entry)
            if movie in unrented and idx < len(unrented[movie]) and unrented[movie][idx] == entry:
                unrented[movie].pop(idx)
            bisect.insort(rented, (price, shop, movie))
        elif op[0] == 'drop':
            params = list(op[1]) if not isinstance(op[1], list) else op[1]
            shop, movie = int(params[0]), int(params[1])
            price = price_map[(shop, movie)]
            entry = (price, shop, movie)
            idx = bisect.bisect_left(rented, entry)
            if idx < len(rented) and rented[idx] == entry:
                rented.pop(idx)
            if movie not in unrented:
                unrented[movie] = []
            bisect.insort(unrented[movie], (price, shop))
        else:  # report
            result.append([[s, m] for _, s, m in rented[:5]])
    return result`,
  },
  visibleTests: [
    {
      args: [
        3,
        [[0, 1, 5], [0, 2, 6], [0, 3, 7], [1, 1, 4], [1, 2, 7], [2, 1, 5]],
        [['search', 1], ['rent', [0, 1]], ['rent', [1, 2]], ['report'], ['drop', [1, 2]], ['search', 2]],
      ],
      expected: [[1, 0, 2], [[0, 1], [1, 2]], [0, 1]],
    },
    {
      args: [
        2,
        [[0, 1, 10], [1, 1, 5]],
        [['search', 1], ['rent', [1, 1]], ['search', 1], ['drop', [1, 1]], ['search', 1]],
      ],
      expected: [[1, 0], [0], [1, 0]],
    },
  ],
  hiddenTests: [
    {
      args: [
        1,
        [[0, 1, 3]],
        [['search', 1], ['rent', [0, 1]], ['report'], ['drop', [0, 1]], ['report']],
      ],
      expected: [[0], [[0, 1]], []],
    },
    {
      args: [
        3,
        [[0, 1, 1], [1, 1, 2], [2, 1, 3]],
        [['search', 1]],
      ],
      expected: [[0, 1, 2]],
    },
    {
      args: [
        2,
        [[0, 1, 5], [0, 2, 3], [1, 1, 4]],
        [['rent', [0, 1]], ['rent', [1, 1]], ['rent', [0, 2]], ['report']],
      ],
      expected: [[[0, 2], [1, 1], [0, 1]]],
    },
  ],
};
