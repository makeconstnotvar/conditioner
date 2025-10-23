import React from 'react';
import { ConditionStore } from "./ConditionStore.js";
import { PersonsStore } from "./PersonsStore.js";
import { NameFilterStore } from "./NameFilterStore.js";
import { TypeFilterStore } from "./TypeFilterStore.js";
import { StatusFilterStore } from "./StatusFilterStore.js";
import { SpeciesFilterStore } from "./SpeciesFilterStore.js";
import { GenderFilterStore } from "./GenderFilterStore.js";
import {ModalStore} from "./ModalStore.js";
import {UserStore} from "./UserStore.js";

const stores = {
  $condition: new ConditionStore(),
  $persons: new PersonsStore(),
  $nameFilter: new NameFilterStore(),
  $typeFilter: new TypeFilterStore(),
  $statusFilter: new StatusFilterStore(),
  $speciesFilter: new SpeciesFilterStore(),
  $genderFilter: new GenderFilterStore(),
  $modal: new ModalStore(),
  $user: new UserStore(),
};

export const StoresContext = React.createContext({});

export const StoresProvider = (props) => {
  return (
    <StoresContext.Provider value={stores}>
      {props.children}
    </StoresContext.Provider>
  );
};

export { stores };
