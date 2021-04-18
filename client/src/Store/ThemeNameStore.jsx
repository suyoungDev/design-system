import { action, makeObservable, observable } from 'mobx';

export class themeName {
  name = '사용자 테마 제목';

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

  loadName() {
    const title = localStorage.getItem('themeName');
    if (title) this.name = title;
    else this.name = '사용자 테마 제목';

    return this.name;
  }
}
export const themeNameStore = new themeName();
