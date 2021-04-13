import { action, makeObservable, observable } from 'mobx';

export class themeName {
  name = '';

  constructor(name) {
    makeObservable(this, {
      name: observable,
      changeName: action,
    });

    this.name = name;
  }

  changeName(name) {
    this.name = name;
  }
}
export const themeNameStore = new themeName();
