import { API_URL } from './const';

// const API_URL = 'http://localhost:8024/api/goods';

export const getData = async(urlApi, params, callbackError = () => {}) => {
  try {
    const url = new URL(API_URL);

    if (params && typeof params === 'object') {
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          url.searchParams.set(key, params[key]);
        }
      }
    }

    const data = await fetch(url)
      .then(response => {
        console.log('url', url)
        console.log('ok', response.ok);
        if (!response.ok) {
          // была ошибка
          // throw new Error('My Error Status: ' + response.status + ' back with Text: ' + response.statusText);
          // throw new Error('Была ошибка');
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch(err => console.log('fetch error', err));

    return data;
    
  } catch (err) {
    console.warn(err);
    if (typeof params === 'function') {
      params(err); // в случае е. не было params
    } else {
      callbackError(err);
    }
  }

  return;
};