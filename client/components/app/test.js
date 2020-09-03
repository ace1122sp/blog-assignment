/* eslint-disable no-undef */
import { smokeTest } from '../../utils/testing';
import App from '.';

describe('App', () => {
  it('renders without crashing', () => {
    smokeTest(App);
  });
});
