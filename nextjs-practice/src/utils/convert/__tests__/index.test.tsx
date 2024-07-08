import { describe, it, expect } from 'vitest';
import { convertArrayToQueryObject } from '../index';

describe('convertArrayToQueryObject', () => {
  it('should convert an array of strings to a query object', () => {
    const input = ['electronics', 'books', 'clothing'];
    const expectedOutput = {
      'productCategory[0]': 'electronics',
      'productCategory[1]': 'books',
      'productCategory[2]': 'clothing',
    };

    const result = convertArrayToQueryObject(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty object for an empty array', () => {
    const input: string[] = [];
    const expectedOutput = {};

    const result = convertArrayToQueryObject(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle an array with a single element', () => {
    const input = ['electronics'];
    const expectedOutput = {
      'productCategory[0]': 'electronics',
    };

    const result = convertArrayToQueryObject(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle an array with multiple elements', () => {
    const input = ['electronics', 'books', 'clothing', 'toys'];
    const expectedOutput = {
      'productCategory[0]': 'electronics',
      'productCategory[1]': 'books',
      'productCategory[2]': 'clothing',
      'productCategory[3]': 'toys',
    };

    const result = convertArrayToQueryObject(input);

    expect(result).toEqual(expectedOutput);
  });
});
