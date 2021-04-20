import { action, makeObservable, observable } from 'mobx';

export class themeName {
  name = '';

  constructor(name = '사용자 테마 제목') {
    makeObservable(this, {
      name: observable,
      changeName: action,
      saveName: action,
      loadName: action,
    });

    this.name = name;
  }

  changeName(name) {
    this.name = name;
  }

  saveName() {
    localStorage.setItem('themeName', this.name);
  }

  loadName() {
    const title = localStorage.getItem('themeName');
    if (title) this.name = title;
  }
}
export const themeNameStore = new themeName();
