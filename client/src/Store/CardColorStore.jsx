import { action, makeObservable, observable } from 'mobx';
import chroma from 'chroma-js';

export class cardColor {
  borderRadius = '';
  buttonColor = '';
  hoverColor = '';
  headColor = '';
  contentColor = '';

  constructor(borderRadius, buttonColor, hoverColor, headColor, contentColor) {
    makeObservable(this, {
      borderRadius: observable,
      buttonColor: observable,
      hoverColor: observable,
      headColor: observable,
      contentColor: observable,
      setCardColor: action,
      setHoverColor: action,
    });

    this.borderRadius = borderRadius;
    this.buttonColor = buttonColor;
    this.hoverColor = hoverColor;
    this.headColor = headColor;
    this.contentColor = contentColor;
  }

  setCardColor(name, value) {
    if (!name || !value) return;
    if (name === 'borderRadius') this.borderRadius = value;
    if (name === 'buttonColor') this.buttonColor = value;
    if (name === 'hoverColor') this.hoverColor = value;
    if (name === 'headColor') this.headColor = value;
    if (name === 'contentColor') this.contentColor = value;
  }

  setHoverColor(value) {
    if (!this.buttonColor) return;
    let newColor;
    if (value === 'brighten') newColor = chroma(this.buttonColor).brighten();
    if (value === 'darken') newColor = chroma(this.buttonColor).darken();
    if (value === 'saturate') newColor = chroma(this.buttonColor).saturate();
    if (value === 'desaturate')
      newColor = chroma(this.buttonColor).desaturate();
    this.setCardColor('hoverColor', newColor);
  }
}

export const cardColorStore = new cardColor();
