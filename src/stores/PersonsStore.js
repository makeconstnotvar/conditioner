import {observable} from "mobx";
import axios from "axios";

class PersonsStore {

  @observable accessor fetchDone = false;
  @observable accessor fetchError = false;
  @observable accessor fetchErrorText = '';
  @observable accessor fetchProgress = false;
  @observable accessor authErr = false;
  @observable accessor data = [];
  @observable accessor filter = {};
  @observable accessor total = 0;

  fetch(params) {
    this.fetchDone = false;
    this.fetchError = false;
    this.fetchProgress = true;
    this.authErr = false;

    axios.get('https://rickandmortyapi.com/api/character', {params})
      .then((response) => {
        this.data = response.data.results;
        this.total = response.data.info.pages;
        this.fetchDone = true;
      })
      .catch((error) => {
        this.fetchError = true;
        this.fetchErrorText = 'Ошибка'
        if (err.response.status === 403) {
          this.authErr = true;
        }
      })
      .finally(() => {
        this.fetchProgress = false;
      });
  }
}

export {PersonsStore}