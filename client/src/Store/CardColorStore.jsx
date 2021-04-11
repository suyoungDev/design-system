import { action, makeObservable, observable } from 'mobx';

export class cardColor {
  borderRadius = '';
  mainColor = '';
  hoverColor = '';
  headColor = '';
  contentColor = '';

  constructor(borderRadius, mainColor, hoverColor, headColor, contentColor) {
    makeObservable(this, {
      borderRadius: observable,
      mainColor: observable,
      hoverColor: observable,
      headColor: observable,
      contentColor: observable,
      setCardColor: action,
    });

    this.borderRadius = borderRadius;
    this.mainColor = mainColor;
    this.hoverColor = hoverColor;
    this.headColor = headColor;
    this.contentColor = contentColor;
  }

  setCardColor(name, value) {
    if (!name || !value) return;
    if (name === 'radius') this.borderRadius = value;
    if (name === 'main') this.mainColor = value;
    if (name === 'hover') this.hoverColor = value;
    if (name === 'head') this.headColor = value;
    if (name === 'content') this.contentColor = value;
  }
}

export const cardColorStore = new cardColor();
