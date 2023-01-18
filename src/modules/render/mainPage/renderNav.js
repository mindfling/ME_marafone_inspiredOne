// * NAVIGATION

export const renderNav = () => {
  const nav = document.querySelector('.navigation');
  nav.innnerHTML = `
  <div class="container navigation__container">
    <ul class="navigation__gender gender">
      <li class="gender__item gender__item_active">
        <a href="#" class="gender__link gender__link_active">Женщины</a>
      </li>
      <li class="gender__item">
        <a href="#" class="gender__link">Мужчины</a>
      </li>
    </ul>
    <ul class="navigation__category category">
      <li class="category__item">
        <a href="#" class="category__link category__link_active">куртки</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link">джинсы</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link">брюки</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link">рубашки</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link">толстовки</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link">футболки</a>
      </li>
    </ul>
  </div>  
  `;
};
