import { action, makeObservable, observable } from 'mobx';

export class baseColor {
  id = Math.random().toFixed(4);
  hexId = '';
  label = '';
  role = '';

  constructor(hexId, label, role) {
    makeObservable(this, {
      hexId: observable,
      label: observable,
      role: observable,
      changeRole: action,
      changeHexId: action,
    });

    this.hexId = hexId;
    this.label = label;
    this.role = role;
  }

  changeRole(role) {
    this.role = role;
  }

  changeHexId(hexId, label) {
    this.hexId = hexId;
    this.label = label;
  }
}

export class baseColorList {
  baseColorList = [];

  constructor(baseColorList) {
    makeObservable(this, {
      baseColorList: observable,
      deleteBaseColor: action,
      deleteAll: action,
      addNewBaseColor: action,
      changeOrder: action,
    });

    this.baseColorList = baseColorList;
  }

  addNewBaseColor(hexId = '#F2F3F5', label = 'default', role = 'default') {
    const newBase = new baseColor(hexId, label, role);
    this.baseColorList.push(newBase);
  }

  deleteBaseColor(id) {
    if (!id) return null;
    const index = this.baseColorList.findIndex((item) => item.id === id);
    if (index > -1) this.baseColorList.splice(index, 1);
  }

  deleteAll() {
    this.baseColorList = [];
  }

  changeOrder(sourceIndex, destinationIndex) {
    if (typeof destinationIndex !== 'number') return;
    if (destinationIndex === sourceIndex) return;

    const result = this.baseColorList;
    const [removed] = result.splice(sourceIndex, 1);
    result.splice(destinationIndex, 0, removed);
    this.baseColorList = result;
  }
}

export const baseColorListStore = new baseColorList([
  new baseColor('#AD9EE5', 'lavender', 'primary'),
  new baseColor('#393B3F', 'ash', 'ink'),
  new baseColor('#f68a6e', 'orange', 'warning'),
  new baseColor('#F3EFA1', 'lemon', 'secondary'),
]);
