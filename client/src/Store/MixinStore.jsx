import { action, makeObservable, observable } from 'mobx';
import chroma from 'chroma-js';
import { colorChipListStore } from './ColorListStore';

export class mixinColors {
  id = Math.random().toFixed(4);
  title = '';
  listOfColors = [];

  constructor(title, listOfColors) {
    makeObservable(this, {
      title: observable,
      listOfColors: observable,
      changeTitle: action,
    });

    this.title = title;
    this.listOfColors = listOfColors;
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
      addMixinToPalette: action,
    });

    this.mixinList = mixinList;
  }

  addNewMixin(hexId = '#513CCC') {
    const list = chroma.scale(['white', hexId]).mode('lch').colors(5);
    const newBase = new mixinColors('new mixin', list);
    this.mixinList.push(newBase);
  }

  deleteMixin(id) {
    if (!id) return null;
    const index = this.mixinList.findIndex((item) => item.id === id);
    if (index > -1) this.mixinList.splice(index, 1);
  }

  addMixinToPalette(id) {
    const index = this.mixinList.findIndex((item) => item.id === id);
    const mixinList = this.mixinList[index].listOfColors;
    const label = this.mixinList[index].title;

    for (let i = 0; i < mixinList.length; i++) {
      colorChipListStore.addColorChip({
        hexId: mixinList[i],
        label: `${label}0${i + 1}`,
      });
    }
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
