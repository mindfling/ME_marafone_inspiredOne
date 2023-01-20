import './index.html';
import './index.scss';

import { mainPage } from './modules/render/mainPage/mainPage';
import { renderHeader } from './modules/render/renderHeader';


renderHeader();
// mainPage();
// renderFooter();


// * обработка кнопки добавить в избранное
const btnFavList = document.querySelectorAll('.product__btn-favorite');

document.addEventListener('DOMContentLoaded', event => {

  btnFavList.forEach(btn => {
    btn.addEventListener('click', (e) => {
      console.log(e.target);
      btn.classList.toggle('product__btn-favorite_active');
    })
  });

});
