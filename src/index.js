import './index.html';
import './index.scss';

import { router } from './modules/router/router';

import { renderHeader } from './modules/render/renderHeader';
import { renderFooter } from './modules/render/renderFooter';

import { mainPage } from './modules/mainPage/mainPage';
import { womenMainPage } from './modules/mainPage/womenMainPage';
import { menMainPage } from './modules/mainPage/menMainPage';
import { getData } from './modules/getData';

import { API_URL } from './modules/const';


// * DATA INIT

const init = async () => {
  const data = await getData(API_URL, {
    list: '5386011733',
  });
  console.log('data: ', data);
  console.log('data: ', data.goods);
  
  
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


// * ROUTER
router.on('*', () => {
  // console.log('* begin all pages at * render deft header footer')
  renderHeader();
  renderFooter();
  // console.log('*  ends all pages at * render deft header footer')
});

router.on('/', () => {
  // console.log('/ beg root page')
  womenMainPage(); // default main page
  // console.log('/ end root page')
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

