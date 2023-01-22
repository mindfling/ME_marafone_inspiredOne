import './index.html';
import './index.scss';

import { mainPage } from './modules/render/mainPage/mainPage';
import { renderHeader } from './modules/render/renderHeader';


// renderHeader();
// mainPage();
// renderFooter();


// * обработка кнопки добавить в избранное

document.addEventListener('DOMContentLoaded', event => {
  const btnFavList = document.querySelectorAll('.product__btn-favorite');
  const goods = document.querySelector('.goods');

  goods.addEventListener('click', (e) => {
    if (e.target.classList.contains('color')) {
      console.log('color')
      e.target.classList.toggle('color_check');
    }
  });

  btnFavList.forEach(btn => {
    btn.addEventListener('click', (e) => {
      console.log(e.target);
      btn.classList.toggle('product__btn-favorite_active');
    })
  });

});
