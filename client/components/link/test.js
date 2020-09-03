/* eslint-disable no-undef */
import { smokeTest } from 'client/utils/testing';
import Link from '.';

describe('Link', () => {
  it('renders without crashing', () => {
    smokeTest(Link, { description: 'testing' });
  });
});
