/* eslint-disable no-undef */
import { smokeTest } from '../../utils/testing';
import Navbar from '.';

describe('Navbar', () => {
  it('renders without crashing', () => {
    smokeTest(Navbar);
  });
});
