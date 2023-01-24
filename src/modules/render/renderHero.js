// * hero
import { createElement } from "../createElement";


export const renderHero = gender => {
  const hero = document.querySelector ('.hero');
  // * initial value women
  hero.classList.add('hero_' + gender);
  console.log ('render hero for:', gender, hero);
  console.log(container)
  
  const content = createElement('',
    {
      className: 'hero__content',
    },
    {
      appends: [
        createElement('h2',
          {
            className: 'hero__title',
          },
          {
            text: 'Новая коллекция Зимней одежды',
          }
        ),
        createElement('a',
          {
            className: 'hero__link',
            href: '#men', // todo
            title: 'перейти по временной ссылке', 
          },
          {
            text: 'Перейти',
          }
        )
      ],
    }
  );

  const container = createElement('',
    { className: 'container hero__container' },
    { 
      append: content,
      parent: hero,
    }
  );

};

  // hero.classList.add('hero_men');

  /*
  hero.innerHTML = `
  <div class="container hero__container">
    <div class="hero__content">
      <h2 class="hero__title">Новая коллекция Зимней одежды для женщин</h2>
      <a href="#" class="hero__link">Перейти</a>
    </div>
  </div>
  `;
  */
