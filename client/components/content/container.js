import { connect } from 'react-redux';
import Content from '.';
import { getAllPosts, getPostsByCategory } from 'client/redux/posts/actions';

const mapStateToProps = ({ posts }) => ({
  posts,
});

const mapDispatchToProps = (dispatch) => ({
  getAllPosts: () => dispatch(getAllPosts()),
  getPostsByCategory: (queries) => dispatch(getPostsByCategory(queries)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
