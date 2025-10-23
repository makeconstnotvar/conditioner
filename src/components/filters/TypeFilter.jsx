import React from 'react';
import {observer} from "mobx-react-lite";
import {useStores} from '../../hooks/useStores.js';

const TypeFilter = observer(({register, disabled}) => {
  const {$typeFilter} = useStores();

  return (
    <div className='cards-filter-item'>
      <label>Type</label>
      <input disabled={disabled} className='form-control' {...register('type')}/>
    </div>
  );
});

export {TypeFilter}
