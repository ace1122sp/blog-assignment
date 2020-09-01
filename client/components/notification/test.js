import React from 'react';
import { smokeTest } from '../../utils/testing';
import Notification from '.';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  smokeTest(Notification);
});

it('removes notification on close button', () => {
  const wrapper = mount(<Notification />);

  // check if notification rendered
  expect(wrapper.exists('div')).toEqual(true);

  // click to close
  wrapper.find('button').simulate('click');

  // check if notification removed
  expect(wrapper.exists('div')).toEqual(false);
});
