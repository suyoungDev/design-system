import { action, makeObservable, observable } from 'mobx';
import chroma from 'chroma-js';

export class mixinColors {
  id = Math.random().toFixed(4);
  title = '';
  mainHexId = '';
  listOfColors = [];

  constructor(title, mainHexId, listOfColors) {
    makeObservable(this, {
      title: observable,
      mainHexId: observable,
      listOfColors: observable,
      changeMainColor: action,
      changeTitle: action,
    });

    this.title = title;
    this.mainHexId = mainHexId;
    this.listOfColors = listOfColors;
  }

  changeMainColor(mainHexId) {
    this.mainHexId = mainHexId;
  }

  changeTitle(title) {
    this.title = title;
  }
}

export class mixinColorsList {
  mixinList = [];

  constructor(mixinList) {
    makeObservable(this, {
      mixinList: observable,
      addNewMixin: action,
      deleteMixin: action,
    });

    this.mixinList = mixinList;
  }

  addNewMixin(hexId = '#513CCC') {
    const list = chroma.scale(['white', hexId]).mode('lch').colors(5);
    const newBase = new mixinColors('new mixin', hexId, list);
    this.mixinList.push(newBase);
  }

  deleteMixin(id) {
    if (!id) return null;
    const index = this.mixinList.findIndex((item) => item.id === id);
    if (index > -1) this.mixinList.splice(index, 1);
  }
}

export const mixinStore = new mixinColorsList([]);
