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
      addNewBaseColor: action,
      changeOrder: action,
      clearList: action,
      saveList: action,
      loadList: action,
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

  changeOrder(sourceIndex, destinationIndex) {
    if (typeof destinationIndex !== 'number') return;
    if (destinationIndex === sourceIndex) return;

    const result = this.baseColorList;
    const [removed] = result.splice(sourceIndex, 1);
    result.splice(destinationIndex, 0, removed);
    this.baseColorList = result;
  }

  clearList() {
    this.baseColorList = [];
  }

  saveList() {
    const baseColorList = this.baseColorList.map((item) => ({
      hexId: item.hexId,
      label: item.label,
      role: item.role,
    }));
    localStorage.setItem('baseColorList', JSON.stringify(baseColorList));
  }

  loadList() {
    const list = localStorage.getItem('baseColorList');
    const dataList = JSON.parse(list);
    if (!dataList) return;

    this.clearList();
    for (let i = 0; i < dataList.length; i++) {
      const { role, label, hexId } = dataList[i];
      this.addNewBaseColor(hexId, label, role);
    }
  }
}

export const baseColorListStore = new baseColorList([
  new baseColor('#AD9EE5', 'lavender', 'primary'),
  new baseColor('#393B3F', 'ash', 'ink'),
  new baseColor('#F3EFA1', 'lemon', 'secondary'),
]);
