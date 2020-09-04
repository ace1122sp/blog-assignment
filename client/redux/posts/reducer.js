import { LOAD_POSTS, ADD_POST, EDIT_POST, REMOVE_POST } from './constants';

const posts = (state = [], { type, data, id }) => {
  switch (type) {
    case LOAD_POSTS:
      return data;
    case ADD_POST:
      return [...state, data];
    case EDIT_POST:
      return state.map((post) => (post.id === data.id ? data : post));
    case REMOVE_POST:
      return state.filter((post) => post.id !== id);
    default:
      return state;
  }
};

export default posts;
