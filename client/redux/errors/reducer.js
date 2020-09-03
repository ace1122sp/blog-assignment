import { REPORT_ERROR, CLEAR_ERROR } from './constants';

const errors = (state = '', { type }) => {
  if (type === REPORT_ERROR) return 'Error happened!';
  if (type === CLEAR_ERROR) return '';
  return state;
};

export default errors;
