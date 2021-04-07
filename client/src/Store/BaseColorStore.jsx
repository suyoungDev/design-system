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
      modifyListItem: action,
      deleteAll: action,
      addNewBaseColor: action,
    });

    this.baseColorList = baseColorList;
  }

  addNewBaseColor(hexId = '#F0F0F0', label = 'default', role = 'default') {
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

  // 안쓰는 액션... 혹시나 남겨둠 나중에 쓸 수 있을 지도?
  modifyListItem(list) {
    let reduced = this.baseColorList.filter(
      (a_item) => !list.find((b_item) => a_item.role === b_item.role)
    );
    let result = reduced.concat(list);
    this.deleteAll();
    result.forEach((item) => {
      this.addNewBaseColor(item.hexId, item.label, item.role);
    });
  }
}

export const baseColorListStore = new baseColorList([
  new baseColor('#868bff', 'lavender', 'Primary'),
  new baseColor('#2037ff', 'blue', 'action'),
  new baseColor('#748199', 'ash', 'ink'),
  new baseColor('#52f4e1', 'mint', 'secondary'),
]);
