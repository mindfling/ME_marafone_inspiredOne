import './index.html';
import './index.scss';

import { router } from './modules/router/router';

import { renderHeader } from './modules/render/renderHeader';
import { renderFooter } from './modules/render/renderFooter';

import { mainPage } from './modules/mainPage/mainPage';
import { womenMainPage } from './modules/mainPage/womenMainPage';
import { menMainPage } from './modules/mainPage/menMainPage';
import { getData } from './modules/getData';

import { API_URL, DATA } from './modules/const';


// * DATA INIT

const init = async () => {
  const dataNavigation = await getData(`${API_URL}/api/categories`, {});
  console.log('dataNavigation: ', dataNavigation);
  DATA.navigation = dataNavigation;
  console.log('DATA.navigation : ', DATA );
  
  
  // * ROUTER
  router.on('*', () => {
    renderHeader();
    renderFooter();
  });
  
  router.on('/', () => {
    womenMainPage(); // default main page
  });
  
  router.on('women', () => {
    console.log('women')
    womenMainPage();
  });
  
  router.on('men', () => {
    console.log('men')
    menMainPage();
  });
  
  
  router.on('cart', () => {
    console.log('#cart go to cart goods')
  });
  
  router.on('fav', () => {
    console.log('#fav go to favorite goods')
  });
  
  router.resolve();

  
  const data = await getData(`${API_URL}/api/goods`, {
    // list: '5386011733',
    gender: 'men',
    category: 'bathrobes',
    // list: '2782180237',
  });
  
  console.log('data ', data)
  
  // const data = await getData(url, {
  //   gender: 'men',
  //   category: 'thermal',
  // });
  // console.log('data: ', data, data.goods, data.page, data.pages);
  
  // data.goods.forEach(item => {
  //   console.log(item.title, '->', item.code)
  // });
};

init();


