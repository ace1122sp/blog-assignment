import { isEmpty, getQueryString } from './misc';

/* eslint-disable no-undef */
describe('util methods', () => {
  describe('isEmpty', () => {
    it('returns true', () => {
      expect(isEmpty('')).toBe(true);
    });
    it('returns false', () => {
      expect(isEmpty('test')).toBe(false);
    });
  });

  describe('getQueryString', () => {
    it('returns string', () => {
      const queryObj = { key1: 'test1', key2: 'test2' };
      const expectedString = '?key1=test1&key2=test2&';

      expect(getQueryString(queryObj)).toEqual(expectedString);
    });
  });
});
