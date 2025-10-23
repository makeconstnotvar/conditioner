import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {useStores} from '../../hooks/useStores.js';

const NameFilter = ({register}) => {
  const {$nameFilter} = useStores();

  useEffect(() => {
    console.log('test')
  }, []);

  return (
    <div className='cards-filter-item'>
      <label>Name</label>
      <input className='form-control' {...register('name')}/>
    </div>
  );
};

export {NameFilter}
