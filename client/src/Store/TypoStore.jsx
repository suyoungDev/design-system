import { action, makeObservable, observable } from 'mobx';

export class typoColor {
  id = Math.random().toFixed(4);
  hexId = '';

  constructor(hexId) {
    makeObservable(this, {
      hexId: observable,
      changeHexId: action,
    });

    this.hexId = hexId;
  }

  changeHexId(hexId) {
    this.hexId = hexId;
  }
}

export class typoColorList {
  colorList = [];

  constructor(colorList) {
    makeObservable(this, {
      colorList: observable,
      addNewColor: action,
      deleteColor: action,
    });

    this.colorList = colorList;
  }

  addNewColor(hexId = '#A4A8AE') {
    const newBase = new typoColor(hexId);
    this.colorList.push(newBase);
  }

  deleteColor(id) {
    if (!id) return null;
    const index = this.colorList.findIndex((item) => item.id === id);
    if (index > -1) this.colorList.splice(index, 1);
  }
}

export const typoColorStore = new typoColorList([new typoColor('#393B3F')]);
