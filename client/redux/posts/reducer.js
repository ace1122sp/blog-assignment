import { LOAD_POSTS } from './constants';

const posts = (state = [], { type, data }) => {
  switch (type) {
    case LOAD_POSTS:
      return data;
    default:
      return state;
  }
};

export default posts;
