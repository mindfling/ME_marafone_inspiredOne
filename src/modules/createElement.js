export const createElement = (tag = '', attr = {}, {append, appends, parent, callback, text} = {}) => {
  if (typeof tag === 'string') {
    if (tag === '') {
      tag = 'div';
    }
  } else {
    return;
  }
  const element = document.createElement(tag);
  
  if (attr) {
    Object.assign(element, attr);
  }

  if (append && append instanceof HTMLElement) {
    element.append(append);
  }
  
  if (appends && appends.every(item => item instanceof HTMLElement)) {
    element.append(...appends);
  }
  
  if (parent && parent instanceof HTMLElement) {
    parent.append(element);
  }

  if (callback && typeof callback === 'function') {
    callback(element);
  }

  if (text && typeof text === 'string') {
    element.textContent = text;
  }

  return element;
}
