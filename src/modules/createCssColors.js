// * create css colors styles

import {createElement} from './createElement';

export const createCssColors = (colors) => {
  console.log('colors: ', colors);
  const style = createElement('style');

  colors.forEach(color => {
    style.textContent += `
      .color_${color.title}:after {
        background-color: ${color.code};
        ${color.title === 'white' ? 'border: 0.4px solid #8A8A8A;' : ''}
      }
    `;
  });

  document.head.append(style);
};
