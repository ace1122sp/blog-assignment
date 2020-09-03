/* eslint-disable no-undef */
import { smokeTest } from 'client/utils/testing';
import Content from '.';

describe('Content', () => {
  it('renders without crashing', () => {
    smokeTest(Content);
  });
});
