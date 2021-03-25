import {default as axios} from 'axios';
import {MAPQUEST_API_KEY} from '@env';

export const getPOI = async (
  query = '',
  collection = 'poi',
  location,
  limit = 5,
) => {
  try {
    const res = await axios.get(
      'http://www.mapquestapi.com/search/v3/prediction?',
      {
        params: {
          q: query,
          collection: collection,
          location: location,
          limit: limit,
          key: MAPQUEST_API_KEY,
        },
      },
    );
    return res;
  } catch (error) {
    return error;
  }
};
