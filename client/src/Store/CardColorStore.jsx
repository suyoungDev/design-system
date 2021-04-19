import { action, makeObservable, observable } from 'mobx';
import chroma from 'chroma-js';

export class cardColor {
  borderRadius = '';
  buttonColor = '';
  buttonRadius = '';
  hoverColor = '';
  headColor = '';
  contentColor = '';
  hoverType = '';

  constructor(
    borderRadius,
    buttonColor,
    hoverColor,
    headColor,
    contentColor,
    hoverType,
    buttonRadius
  ) {
    makeObservable(this, {
      borderRadius: observable,
      buttonColor: observable,
      hoverColor: observable,
      headColor: observable,
      contentColor: observable,
      hoverType: observable,
      buttonRadius: observable,
      setCardColor: action,
      setHoverColor: action,
    });

    this.borderRadius = borderRadius;
    this.buttonColor = buttonColor;
    this.hoverColor = hoverColor;
    this.headColor = headColor;
    this.contentColor = contentColor;
    this.hoverType = hoverType;
    this.buttonRadius = buttonRadius;
  }

  setCardColor(name, value) {
    if (!name || !value) return;
    if (name === 'borderRadius') this.borderRadius = value;
    if (name === 'hoverColor') this.hoverColor = value;
    if (name === 'headColor') this.headColor = value;
    if (name === 'contentColor') this.contentColor = value;
    if (name === 'buttonRadius') this.buttonRadius = value;
    if (name === 'buttonColor') {
      this.buttonColor = value;
      this.hoverColor = '';
      this.hoverType = '';
    }
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
    this.hoverType = value;
  }
}

export const cardColorStore = new cardColor();
