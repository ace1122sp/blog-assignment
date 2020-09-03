import { LOAD_POSTS, ADD_POST, REMOVE_POST } from './constants';

const posts = (state = [], { type, data, id }) => {
  switch (type) {
    case LOAD_POSTS:
      return data;
    case ADD_POST:
      return [...state, data];
    case REMOVE_POST:
      return state.filter((post) => post.id !== id);
    default:
      return state;
  }
};

export default posts;
