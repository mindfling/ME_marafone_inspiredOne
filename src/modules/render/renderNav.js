// * NAVIGATION

export const renderNav = (gender) => {
  const nav = document.querySelector('.navigation');
  console.log('render nav for', gender, nav);

  nav.innerHTML = `
  <div class="container navigation__container">
    <ul class="navigation__gender gender">
      <li class="gender__item">
        <a href="#" class="gender__link gender__link_active" data-gender="women">Женщины</a>
      </li>
      <li class="gender__item">
        <a href="#" class="gender__link" data-gender="men">Мужчины</a>
      </li>
    </ul>
    <ul class="navigation__category category">
      <li class="category__item">
        <a href="#" class="category__link" data-slug="jackets">куртки</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link" data-slug="jeens">джинсы</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link" data-slug="pants">брюки</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link category__link_active" data-slug="shirts">рубашки</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link" data-slug="hoodie">толстовки</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link" data-slug="t-shirts">футболки</a>
      </li>
    </ul>
  </div>
  `;
};
