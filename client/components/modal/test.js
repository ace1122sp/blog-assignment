/* eslint-disable no-undef */
import { smokeTest } from '../../utils/testing';
import Modal from '.';

describe('Modal', () => {
  it('renders without crashing', () => {
    smokeTest(Modal, { confirm: () => {}, close: () => {} });
  });
});
