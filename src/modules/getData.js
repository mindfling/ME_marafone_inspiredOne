import { API_URL } from './const';

// const API_URL = 'http://localhost:8024/api/goods';

export const getData = async(urlApi, params, callbackError = () => {}) => {
  try {
    const url = new URL(urlApi);
    console.log('url: ', url);

    // обработка параметров перед отправкой
    if (params && typeof params === 'object') {
      for (const key in params) {
        if (params.hasOwnProperty(key)) { //
          url.searchParams.set(key, params[key]);
        } //
      }
    }

    const response = await fetch(url);
    console.log('response: ', response);
    
    const data = await response.json();
    console.log('json data: ', data);

    if (!response.ok) {
      // была ошибка
      throw new Error(data.message);
    }

    return data;
    
  } catch (err) {
    // запуск колбека при ошибке
    console.warn(err);
    if (typeof params === 'function') {
      params(err); // в случае е. не было params
    } else {
      callbackError(err);
    }
  }

  return;
};