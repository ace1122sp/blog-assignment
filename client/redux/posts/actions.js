import axios from 'axios';
import { getQueryString } from 'client/utils/misc';
import { reportError } from 'client/redux/errors/actions';
import { setFetchingStatus } from 'client/redux/fetching/actions';
import { POSTS_URL, POSTS_BY_CATEGORY_URL } from 'client/constants/urls';
import { LOAD_POSTS } from './constants';

const loadPosts = (data) => ({
  type: LOAD_POSTS,
  data,
});

const _getPosts = (url) => (dispatch) => {
  dispatch(setFetchingStatus(true));

  return axios
    .get(url)
    .then((res) => {
      dispatch(loadPosts(res.data.resultData));
    })
    .catch((err) => {
      console.error(err);
      dispatch(reportError());
    })
    .finally(() => {
      dispatch(setFetchingStatus(false));
    });
};

export const getAllPosts = () => _getPosts(POSTS_URL);
export const getPostsByCategory = (queries) =>
  _getPosts(`${POSTS_BY_CATEGORY_URL}${getQueryString(queries)}`);
