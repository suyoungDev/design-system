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
      changeVariation: action,
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

  changeVariation(hexId, takeMiddle, mixinIndex, id) {
    if (!id || !hexId) return null;

    const index = this.mixinList.findIndex((item) => item.id === id);
    let list = [];

    // 첫번째 값 수정
    if (mixinIndex === 0) {
      const last = this.mixinList[index].listOfColors[4];
      if (takeMiddle) {
        const middle = this.mixinList[index].listOfColors[2];
        list = chroma.scale([hexId, middle, last]).mode('lch').colors(5);
      } else {
        list = chroma.scale([hexId, last]).mode('lch').colors(5);
      }
    }

    // 중간 값 수정 (첫값, 마지막값 보존)
    if (mixinIndex === 2) {
      const first = this.mixinList[index].listOfColors[0];
      const last = this.mixinList[index].listOfColors[4];
      list = chroma.scale([first, hexId, last]).mode('lch').colors(5);
    }

    // 마지막 값 수정
    if (mixinIndex === 4) {
      const first = this.mixinList[index].listOfColors[0];
      if (takeMiddle) {
        const middle = this.mixinList[index].listOfColors[2];
        list = chroma.scale([first, middle, hexId]).mode('lch').colors(5);
      } else {
        list = chroma.scale([first, hexId]).mode('lch').colors(5);
      }
    }
    if (list.length) {
      this.mixinList[index].listOfColors = list;
    }
  }
}

export const mixinStore = new mixinColorsList([]);
