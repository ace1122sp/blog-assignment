/* eslint-disable no-undef */
import { smokeTest } from 'client/utils/testing';
import Card from '.';

const mockData = {
  id: 1,
  title: 'test title',
  categoryId: 1,
  text: 'test text',
  createdAt: '1-1-2020',
  editPost: () => {},
  delete: () => {},
};

describe('Card', () => {
  it('renders without crashing', () => {
    smokeTest(Card, mockData);
  });
});
