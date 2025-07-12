import { merge } from '../src/merge';

describe('merge()', () => {
  it('merges three non‑empty collections', () => {
    const a = [9, 7, 3, 1];           // DESC
    const b = [2, 4, 5, 6, 10];       // ASC
    const c = [0, 8, 11];             // ASC
    expect(merge(a, b, c)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });

  it('handles duplicates correctly', () => {
    const a = [5, 5, 4];
    const b = [4, 4, 5, 6];
    const c = [1, 5, 7];
    expect(merge(a, b, c)).toEqual([1, 4, 4, 4, 5, 5, 5, 5, 6, 7]);
  });

  it('works when some collections are empty', () => {
    expect(merge([], [1, 3, 5], [2, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(merge([3, 2, 1], [], [])).toEqual([1, 2, 3]);
  });

  it('handles all arrays empty', () => {
    expect(merge([], [], [])).toEqual([]);
  });
});