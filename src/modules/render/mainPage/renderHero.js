// * hero

export const renderHero = () => {
  const hero = document.querySelector('.hero');

  hero.innerHTML = `
  <div class="container hero__container">
    <div class="hero__content">
      <h2 class="hero__title">Новая коллекция Зимней одежды</h2>
      <a href="#" class="hero__link">Перейти</a>
    </div>
  </div>
  `;
};
