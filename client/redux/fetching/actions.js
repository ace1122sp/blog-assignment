import { SET_FETCHING_STATUS } from './constants';

export const setFetchingStatus = (status) => ({
  type: SET_FETCHING_STATUS,
  status,
});
