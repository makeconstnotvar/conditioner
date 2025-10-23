import React from 'react';
import {observer} from "mobx-react-lite";
import {useStores} from '../../hooks/useStores.js';

const GenderFilter = observer(({register}) => {
  const {$genderFilter} = useStores();

  return (
    <div className='cards-filter-item'>
      <label>Gender</label>
      <select className='form-control' {...register('gender')}>
        {$genderFilter.data.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});

export {GenderFilter}
