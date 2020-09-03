import { REPORT_ERROR, CLEAR_ERROR } from './constants';

export const reportError = () => ({
  type: REPORT_ERROR,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});
