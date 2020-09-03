/* eslint-disable no-undef */
import { smokeTest } from '../../utils/testing';
import Header from '.';

describe('Header', () => {
  it('renders without crashing', () => {
    smokeTest(Header);
  });
});
