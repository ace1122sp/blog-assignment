export const isEmpty = (param) =>
  param === '' || param === undefined || param === null;

export const getQueryString = (queryObj) => {
  let queryString = '?';

  for (const key in queryObj) {
    if (!isEmpty(queryObj[key])) {
      queryString += key + '=' + queryObj[key] + '&';
    }
  }

  return queryString;
};
