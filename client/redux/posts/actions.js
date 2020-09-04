import axios from 'axios';
import { getQueryString } from 'client/utils/misc';
import { reportError } from 'client/redux/errors/actions';
import { setFetchingStatus } from 'client/redux/fetching/actions';
import { POSTS_URL, POSTS_BY_CATEGORY_URL } from 'client/constants/urls';
import { LOAD_POSTS, ADD_POST, EDIT_POST, REMOVE_POST } from './constants';

const loadPosts = (data) => ({
  type: LOAD_POSTS,
  data,
});

const addPost = (data) => ({
  type: ADD_POST,
  data,
});

const editPost = (data) => ({ type: EDIT_POST, data });

const removePost = (id) => ({
  type: REMOVE_POST,
  id,
});

const requestHandlerWrapper = (requestHandler, dispatch) => {
  dispatch(setFetchingStatus(true));

  return requestHandler(dispatch)
    .catch((err) => {
      console.error(err);
      dispatch(reportError());
    })
    .finally(() => {
      dispatch(setFetchingStatus(false));
    });
};

const _getPosts = (url) => (dispatch) =>
  axios.get(url).then((res) => {
    dispatch(loadPosts(res.data.resultData));
  });

const getPosts = (url) => (dispatch) =>
  requestHandlerWrapper(_getPosts(url), dispatch);

export const getAllPosts = () => getPosts(POSTS_URL);
export const getPostsByCategory = (queries) =>
  getPosts(`${POSTS_BY_CATEGORY_URL}${getQueryString(queries)}`);

const _createPost = (data) => (dispatch) =>
  axios.post(POSTS_URL, data).then((res) => {
    dispatch(addPost(res.data));
  });

export const createPost = (data) => (dispatch) =>
  requestHandlerWrapper(_createPost(data), dispatch);

const _putPost = (data) => (dispatch) =>
  axios.put(`${POSTS_URL}/${data.id}`, data).then(() => {
    dispatch(editPost(data));
  });

export const putPost = (data) => (dispatch) =>
  requestHandlerWrapper(_putPost(data), dispatch);

const _deletePost = (id) => (dispatch) =>
  axios.delete(`${POSTS_URL}/${id}`).then(() => {
    dispatch(removePost(id));
  });

export const deletePost = (id) => (dispatch) =>
  requestHandlerWrapper(_deletePost(id), dispatch);
