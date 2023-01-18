// * products list all

export const renderProducts = () => {
  const products = document.querySelector('.goods');

  products.innerHTML = `
<div class="container goods__container">
  <h2 class="goods__title">Новинки</h2>
  <ul class="goods__list">
    <li class="goods__item">
      <article class="product goods__product">
        <a href="#" class="product__link">
          <img class="product__image" src="img/main-logo.svg" alt="product 01">
          <h3 class="product__title">Куртка женская Winter Spring из Натурального Хлопка</h3>
        </a>
        <div class="product__row">
          <p class="product__price">1299&nbsp;&#8381;</p>
          <button class="product__btn-favorite product__btn-favorite_active" aria-label="добавить в избраное"></button>
        </div>
        <ul class="product__color-list">
          <li class="product__color-item">
            <div class="color color_red color_check"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_black"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_white"></div>
          </li>
        </ul>
      </article>
    </li>
    <li class="goods__item">
      <article class="product goods__product">
        <a href="#" class="product__link">
          <img class="product__image" src="img/goods/product001.jpg" alt="product 01">
          <h3 class="product__title">Желетка женская синяя Prague Full удлиненная</h3>
        </a>
        <div class="product__row">
          <p class="product__price">1299 &#8381;</p>
          <button class="product__btn-favorite" aria-label="добавить в избраное"></button>
        </div>
        <ul class="product__color-list">
          <li class="product__color-item">
            <div class="color color_red"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_black"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_white"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_blue color_check"></div>
          </li>
        </ul>
      </article>
    </li>
    <li class="goods__item">
      <article class="product goods__product">
        <a href="#" class="product__link">
          <img class="product__image" src="img/goods/product002.jpg" alt="product 01">
          <h3 class="product__title">Куртка женская длинная Paris зимняя</h3>
        </a>
        <div class="product__row">
          <p class="product__price">1299 &#8381;</p>
          <button class="product__btn-favorite" aria-label="добавить в избраное"></button>
        </div>
        <ul class="product__color-list">
          <li class="product__color-item">
            <div class="color color_red"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_black"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_white"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_green color_check"></div>
          </li>
        </ul>
      </article>
    </li>
    <li class="goods__item">
      <article class="product goods__product">
        <a href="#" class="product__link">
          <img class="product__image" src="img/goods/product006.jpg" alt="product 01">
          <h3 class="product__title">Курстка женская зимняя Bien из Микрофибры длинная</h3>
        </a>
        <div class="product__row">
          <p class="product__price">1299 &#8381;</p>
          <button class="product__btn-favorite" aria-label="добавить в избраное"></button>
        </div>
        <ul class="product__color-list">
          <li class="product__color-item">
            <div class="color color_red"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_black"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_blue color_check"></div>
          </li>
        </ul>
      </article>
    </li>
  </ul>
</div>
  `;
};
