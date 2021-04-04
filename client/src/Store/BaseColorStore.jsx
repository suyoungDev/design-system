import { action, makeObservable, observable } from 'mobx';

export class baseColor {
  id = Math.random().toFixed(4);
  hexId = '';
  mainRole = '';

  constructor(hexId, mainRole) {
    makeObservable(this, {
      hexId: observable,
      mainRole: observable,
    });

    this.hexId = hexId;
    this.mainRole = mainRole;
  }
}

export class baseColorList {
  baseColorList = [];

  constructor(baseColorList) {
    makeObservable(this, {
      baseColorList: observable,
      addBaseColor: action,
      deleteBaseColor: action,
    });

    this.baseColorList = baseColorList;
  }

  addBaseColor(hexId, title, mainRole) {
    const newBase = new baseColor(hexId, title, mainRole);
    this.baseColorList.push(newBase);
  }

  deleteBaseColor(id) {
    const index = this.baseColorList.findIndex((item) => item.id === id);
    if (index > -1) this.baseColorList.splice(index, 1);
  }
}

export const baseColorListStore = new baseColorList([
  new baseColor('#868bff', 'Primary'),
]);
