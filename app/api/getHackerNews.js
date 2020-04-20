import fetch from '../utils/serviceUtil';
import { HACKERNEWS_ENDPOINT } from '../constants';

export default async (pageNumber = 0) => {
    return fetch(`${HACKERNEWS_ENDPOINT}?page=${pageNumber}`)
      .then(response => response.data)
      .catch(err => {
        throw err;
      });
  };
