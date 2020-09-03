/* eslint-disable no-undef */
import { smokeTest } from 'client/utils/testing';
import Button from '.';

describe('Button', () => {
  it('renders without crashing', () => {
    smokeTest(Button, { label: 'test' });
  });
});
