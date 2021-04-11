import { action, makeObservable, observable } from 'mobx';
import chroma from 'chroma-js';

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
      setHoverColor: action,
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

  setHoverColor(value) {
    if (!this.mainColor) return;
    let newColor;
    if (value === 'brighten') newColor = chroma(this.mainColor).brighten();
    if (value === 'darken') newColor = chroma(this.mainColor).darken();
    if (value === 'saturate') newColor = chroma(this.mainColor).saturate();
    if (value === 'desaturate') newColor = chroma(this.mainColor).desaturate();
    this.setCardColor('hover', newColor);
  }
}

export const cardColorStore = new cardColor();
