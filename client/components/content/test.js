/* eslint-disable no-undef */
import { smokeTest } from 'client/utils/testing';
import Content from '.';

const mockData = {
  getAllPosts: () => {},
  getPostsByCategory: () => {},
  editPost: () => {},
  deletePost: () => {},
};

describe('Content', () => {
  it('renders without crashing', () => {
    smokeTest(Content, mockData);
  });
});
