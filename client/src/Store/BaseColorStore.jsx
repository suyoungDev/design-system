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
    });

    this.hexId = hexId;
    this.label = label;
    this.role = role;
  }
}

export class baseColorList {
  baseColorList = [];

  constructor(baseColorList) {
    makeObservable(this, {
      baseColorList: observable,
      addBaseColor: action,
      deleteBaseColor: action,
      modifyListItem: action,
      deleteAll: action,
      modifyRole: action,
      modifyHexId: action,
      newBaseColor: action,
    });

    this.baseColorList = baseColorList;
  }

  newBaseColor() {
    const newBase = new baseColor('#F0F0F0', 'default', 'default');
    this.baseColorList.push(newBase);
  }

  addBaseColor(hexId, label, role) {
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

  modifyRole(id, value) {
    if (!id) return null;
    const index = this.baseColorList.findIndex((item) => item.id === id);
    if (index > -1) {
      this.baseColorList[index].role = value;
    }
  }

  modifyHexId(id, hexId, label) {
    if (!id) return null;
    const index = this.baseColorList.findIndex((item) => item.id === id);
    if (index > -1) {
      this.baseColorList[index].hexId = hexId;
      this.baseColorList[index].label = label;
    }
  }

  modifyListItem(list) {
    let reduced = this.baseColorList.filter(
      (a_item) => !list.find((b_item) => a_item.role === b_item.role)
    );
    let result = reduced.concat(list);
    this.deleteAll();
    result.forEach((item) => {
      this.addBaseColor(item.hexId, item.label, item.role);
    });
  }
}

export const baseColorListStore = new baseColorList([
  new baseColor('#868bff', 'lavender', 'Primary'),
  new baseColor('#2037ff', 'blue', 'action'),
  new baseColor('#748199', 'ash', 'ink'),
  new baseColor('#52f4e1', 'mint', 'secondary'),
]);
