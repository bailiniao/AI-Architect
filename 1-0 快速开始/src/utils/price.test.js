import { describe, expect, it } from 'vitest';
import { calculateTotal } from './price';

describe('calculateTotal', () => {
  it('returns 0 when items is empty', () => {
    expect(calculateTotal([])).toBe(0);
  });

  it('returns 0 when items is missing', () => {
    expect(calculateTotal()).toBe(0);
  });

  it('calculates subtotal without discount', () => {
    const items = [
      { price: 100, quantity: 2 },
      { price: 50, quantity: 1 },
    ];

    expect(calculateTotal(items)).toBe(250);
  });

  it('applies discount rate', () => {
    const items = [
      { price: 100, quantity: 2 },
      { price: 50, quantity: 1 },
    ];

    expect(calculateTotal(items, 0.1)).toBe(225);
  });
});
