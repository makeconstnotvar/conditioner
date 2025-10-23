import React from 'react';
import {observer} from "mobx-react-lite";
import {useStores} from '../../hooks/useStores.js';

const StatusFilter = observer(({register}) => {
  const {$statusFilter} = useStores();

  return (
    <div className='cards-filter-item'>
      <label>Status</label>
      <select className='form-control' {...register('status')}>
        {$statusFilter.data.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});

export {StatusFilter}
