import { action, makeObservable, observable } from 'mobx';

export class colorChip {
  id = Math.random().toFixed(4);
  title = '';
  hexId = '';

  constructor(hexId, title) {
    makeObservable(this, {
      hexId: observable,
      title: observable,
      fix: action,
    });

    this.hexId = hexId;
    this.title = title;
  }

  fix(hexId, title) {
    this.hexId = hexId;
    this.title = title;
  }
}

class ColorChipList {
  colorList = [];

  constructor(colorList) {
    makeObservable(this, {
      colorList: observable,
      addColorChip: action,
      deleteColorChip: action,
    });
    this.colorList = colorList;
  }

  deleteColorChip(id) {
    const index = this.colorList.findIndex((item) => item.id === id);
    if (index > -1) {
      this.colorList.splice(index, 1);
    }
  }

  addColorChip(props) {
    const newColorChip = new colorChip(props.hexId, props.title);
    this.colorList.push(newColorChip);
  }
}

export const colorChipListStore = new ColorChipList([
  new colorChip('#868bff', 'lavender'),
  new colorChip('#748199', 'ash'),
  new colorChip('#fa8888', 'pink'),
  new colorChip('#52f4e1', 'mint'),
]);
