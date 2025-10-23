import {action, computed, observable} from "mobx";

class UserStore {
  @observable accessor data = {
    login: '',
    pass: '',
    name: '',
    email: ''
  };
  @observable accessor role = 'manager1';


  @action login() {

  }

  @action auth() {

  }

  @computed get isManager() {
    return this.role === 'manager';
  }

  @computed get isAdmin() {
    return this.role === 'admin';
  }

}

export  {UserStore}

