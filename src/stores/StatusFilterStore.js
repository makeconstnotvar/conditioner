import {observable} from "mobx";

class StatusFilterStore {
  @observable accessor data = [
    {value: '', label: 'Any'},
    {value: 'Alive', label: 'Alive'},
    {value: 'Dead', label: 'Dead'},
    {value: 'Unknown', label: 'Unknown'}
  ];
}

export {StatusFilterStore}
