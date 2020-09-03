import { connect } from 'react-redux';
import Header from '.';
import { createPost } from 'client/redux/posts/actions';

const mapDispatchToProps = (dispatch) => ({
  createPost: (data) => dispatch(createPost(data)),
});

export default connect(null, mapDispatchToProps)(Header);
