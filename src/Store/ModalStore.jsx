import { action, makeObservable, observable } from 'mobx';

export class openModal {
  isModalOpen = false;
  payload = {};

  constructor(isModalOpen, payload) {
    makeObservable(this, {
      isModalOpen: observable,
      payload: observable,
      setModalOpen: action,
    });

    this.isModalOpen = isModalOpen;
    this.payload = payload;
  }

  setModalOpen(isOpen = false, payload = null) {
    this.isModalOpen = isOpen;
    this.payload = payload;
  }
}

export const openModalStore = new openModal();
