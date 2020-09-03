/* eslint-disable no-undef */
import { smokeTest } from 'client/utils/testing';
import Card from '.';

describe('Card', () => {
  it('renders without crashing', () => {
    smokeTest(Card);
  });
});
