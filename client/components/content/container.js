import { connect } from 'react-redux';
import Content from '.';
import {
  getAllPosts,
  getPostsByCategory,
  putPost,
  deletePost,
} from 'client/redux/posts/actions';

const mapStateToProps = ({ posts }) => ({
  posts,
});

const mapDispatchToProps = (dispatch) => ({
  getAllPosts: () => dispatch(getAllPosts()),
  getPostsByCategory: (queries) => dispatch(getPostsByCategory(queries)),
  editPost: (data) => dispatch(putPost(data)),
  deletePost: (id) => dispatch(deletePost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
