import {observable} from "mobx";

class GenderFilterStore {
  @observable accessor data = [
    {value: '', label: 'Any'},
    {value: 'male', label: 'Male'},
    {value: 'female', label: 'Female'},
    {value: 'genderless', label: 'Genderless'},
    {value: 'unknown', label: 'Unknown'}
  ];
}

export {GenderFilterStore}
