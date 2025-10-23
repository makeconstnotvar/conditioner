import {observable} from "mobx";

class SpeciesFilterStore {
  @observable accessor data = [
    {value: '', label: 'Any'},
    {value: 'Human', label: 'Human'},
    {value: 'Alien', label: 'Alien'},
    {value: 'Humanoid', label: 'Humanoid'},
    {value: 'unknown', label: 'Unknown'},
    {value: 'Poopybutthole', label: 'Poopybutthole'},
    {value: 'Mythological Creature', label: 'Mythological Creature'},
    {value: 'Animal', label: 'Animal'},
    {value: 'Robot', label: 'Robot'},
    {value: 'Cronenberg', label: 'Cronenberg'},
    {value: 'Disease', label: 'Disease'}
  ];
}

export {SpeciesFilterStore}
