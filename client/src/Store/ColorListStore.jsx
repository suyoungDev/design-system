import { action, makeObservable, observable } from 'mobx';

export class colorChip {
  id = Math.random().toFixed(4);
  label = '';
  hexId = '';

  constructor(hexId, label) {
    makeObservable(this, {
      hexId: observable,
      label: observable,
      fix: action,
    });

    this.hexId = hexId;
    this.label = label;
  }

  fix(hexId, label) {
    this.hexId = hexId;
    this.label = label;
  }
}

class ColorChipList {
  colorList = [];

  constructor(colorList) {
    makeObservable(this, {
      colorList: observable,
      addColorChip: action,
      deleteColorChip: action,
      changeOrder: action,
      modifyColorChip: action,
    });
    this.colorList = colorList;
  }

  deleteColorChip(id) {
    const index = this.colorList.findIndex((item) => item.id === id);
    if (index > -1) this.colorList.splice(index, 1);
  }

  addColorChip(props) {
    const newColorChip = new colorChip(props.hexId, props.label);
    this.colorList.push(newColorChip);
  }

  changeOrder(sourceIndex, destinationIndex) {
    if (typeof destinationIndex !== 'number') return;
    if (destinationIndex === sourceIndex) return;

    const result = this.colorList;
    const [removed] = result.splice(sourceIndex, 1);
    result.splice(destinationIndex, 0, removed);
    this.colorList = result;
  }

  modifyColorChip(item) {
    const { hexId, id, label } = item;
    const index = this.colorList.findIndex((item) => item.id === id);
    if (index > -1) {
      this.colorList[index].label = label;
      this.colorList[index].hexId = hexId;
    }
  }
}

export const colorChipListStore = new ColorChipList([
  new colorChip('#AD9EE5', 'lavender'),
  new colorChip('#393B3F', 'ash'),
  new colorChip('#fa8888', 'pink'),
  new colorChip('#f68a6e', 'orange'),
  new colorChip('#F3EFA1', 'lemon'),
]);
