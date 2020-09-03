import { SET_FETCHING_STATUS } from './constants';

const fetching = (state = false, { type, status }) => {
  if (type === SET_FETCHING_STATUS) return status;
  return state;
};

export default fetching;
