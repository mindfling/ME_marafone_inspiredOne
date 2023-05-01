import {API_URL} from './const';

export const getData = async (urlApi, params = {}, cb = () => {}) => {
  try {
    const url = new URL(urlApi);

    // обработка параметров перед отправкой
    if (params && typeof params === 'object') {
      for (const key in params) {
        if (params.hasOwnProperty(key)) { //
          // здесь в searchParams.set param list [] тоже сварачивается в строку
          url.searchParams.set(key, params[key]);
        } //
      }
    }

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (err) {
    // запуск колбека при ошибке
    console.warn(err);
    if (typeof params === 'function') {
      params(err); // в случае е. не было params
    } else {
      cb(err); // запуск callback error
    }
  }
};
