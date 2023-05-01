// * hero
import {TITLE} from '../const';
import {createElement} from '../createElement';

export const renderHero = (gender) => {
  console.log('render hero gender: ', gender);


  // const hero = document.querySelector('.hero');
  const heroContainer = document.querySelector('.hero__container');
  heroContainer.innerHTML = ''; // очистка
  const hero = heroContainer.parentElement;
  // hero.classList.remove('hero_women', 'hero_men');
  // hero.classList.add('hero_' + gender);
  hero.className = `hero hero_${gender}`;
  console.log('hero: ', hero);

  if (!gender) {
    console.log('empty gender hero');
    hero.style.display = 'none';
    return;
  }
  hero.style.display = '';


  const content = createElement(
    '',
    {
      className: 'hero__content',
    },
    {
      parent: heroContainer,
      appends: [
        createElement(
          'h2',
          {
            className: 'hero__title',
          },
          {
            // text: heroTitles[gender], // todo
            text: TITLE[gender].title,
          },
        ),
        createElement(
          'a',
          {
            className: 'hero__link',
            href: `#${TITLE[gender]?.url}`, // todo
            title: 'Перейти по ссылке на страницу ' + TITLE[gender].title,
          },
          {
            text: 'Перейти',
          },
        ),
      ],
    },
  );
};
