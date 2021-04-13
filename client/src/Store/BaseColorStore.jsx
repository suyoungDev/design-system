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
  new baseColor('#868bff', 'lavender', 'Primary'),
  new baseColor('#2037ff', 'blue', 'action'),
  new baseColor('#748199', 'ash', 'ink'),
  new baseColor('#52f4e1', 'mint', 'secondary'),
]);
