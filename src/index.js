import './index.html';
import './index.scss';

import {router} from './modules/router/router';
import {renderHeader} from './modules/render/renderHeader';
import {renderFooter} from './modules/render/renderFooter';
import {mainPage} from './modules/mainPage/mainPage';
import {womenMainPage} from './modules/mainPage/womenMainPage';
import {menMainPage} from './modules/mainPage/menMainPage';
import {getData} from './modules/getData';
import {API_URL, DATA} from './modules/const';
import {createElement} from './modules/createElement';
import {createCssColors} from './modules/createCssColors';


// * DATA INIT

const init = async () => {
  try {
    DATA.navigation = await getData(`${API_URL}/api/categories`, {});
    DATA.colors = await getData(`${API_URL}/api/colors`,
      e => console.log('callback', e));
    // console.log('DATA : ', DATA );
    // console.log('DATA.colors: ', DATA.colors);
    // console.log('DATA.navigation: ', DATA.navigation);
    createCssColors(DATA.colors);


    // * ROUTER
    router.on('*', () => {
      renderHeader();
      renderFooter();
    });

    router.on('/', () => {
      womenMainPage(); // default main page
    });

    router.on('women', () => {
      console.log('women');
      womenMainPage();
    });

    router.on('men', () => {
      console.log('men');
      menMainPage();
    });


    router.on('cart', () => {
      console.log('#cart go to cart goods');
    });

    router.on('fav', () => {
      console.log('#fav go to favorite goods');
    });

    router.on(':gender/:category', () => {
      console.log('# with gender category');
      console.log('загружаем gender и категории');
    });
  } catch (err) {
    console.log('err: ', err);
  } finally {
    console.log('finally resolved', DATA.navigation, DATA.colors);
    router.resolve();
  }
};

init();


