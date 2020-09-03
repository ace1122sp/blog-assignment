/* eslint-disable no-undef */
import { smokeTest } from '../../utils/testing';
import FormInputWrapper from '.';

describe('FormInputWrapper', () => {
  it('renders without crashing', () => {
    smokeTest(FormInputWrapper, { label: 'test', labelFor: 'test' });
  });
});
