import React from 'react';
import {observer} from "mobx-react-lite";
import {useStores} from '../../hooks/useStores.js';

const SpeciesFilter = observer(({register}) => {
  const {$speciesFilter} = useStores();

  return (
    <div className='cards-filter-item'>
      <label>Species</label>
      <select className='form-control' {...register('species')}>
        {$speciesFilter.data.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});

export {SpeciesFilter}
