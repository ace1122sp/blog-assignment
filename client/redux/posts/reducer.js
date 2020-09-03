import { LOAD_POSTS, ADD_POST } from './constants';

const posts = (state = [], { type, data }) => {
  switch (type) {
    case LOAD_POSTS:
      return data;
    case ADD_POST:
      return [...state, data];
    default:
      return state;
  }
};

export default posts;
