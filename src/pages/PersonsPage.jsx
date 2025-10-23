import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {useForm} from 'react-hook-form';
import {useStores} from '../hooks/useStores.js';
import {NameFilter} from '../components/filters/NameFilter.jsx';
import {TypeFilter} from '../components/filters/TypeFilter.jsx';
import {StatusFilter} from '../components/filters/StatusFilter.jsx';
import {SpeciesFilter} from '../components/filters/SpeciesFilter.jsx';
import {GenderFilter} from '../components/filters/GenderFilter.jsx';
import {Test} from "../components/Test.jsx";
import {ModalSample} from "../components/ModalSample.jsx";
import {Roles} from "../components/Roles.jsx";
import {useLocation, useNavigate} from "@reach/router";
import qs from 'qs';

function clean(data) {
  let newObj = {}
  for (let key in data) {
    if (data[key]) {
      newObj[key] = data[key];
    }
  }
  return newObj;
}

const PersonsPage = observer(() => {
  const {$persons, $modal, $user} = useStores();

  const [pages, setPages] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const obj = qs.parse(location.search, {ignoreQueryPrefix: true});
  const {register, handleSubmit} = useForm({
    defaultValues: {
      name: obj.name,
      gender: obj.gender,
      species: "",
      status: "",
      type: "",
    },
  });

  useEffect(() => {
    $persons.fetch(obj);
    setPages(getPages($persons.total));
  }, [$persons.total]);

  function onSubmit(data) {
    $persons.fetch(data);
    let search = qs.stringify(clean(data), {addQueryPrefix: true})
    navigate('/persons' + search, {replace: true})
    setPages(getPages($persons.total));
  }

  function getPages(total) {
    let pages = []
    if (total != null) {
      pages = Array.from({length: total}, (_, i) => i + 1);
    }
    return pages;
  }

  function pageHandler(page) {
    if (page < 1) page = 1;
    if (page > $persons.total) page = $persons.total;
    const formData = new FormData(document.querySelector('form'));
    const data = Object.fromEntries(formData);
    data.page = page;
    onSubmit(data);
  }

  const modalOpen = () => {
    $modal.show(ModalSample, {data: 1});
  }

  return (
    <main>
      <header/>
      <div className='cards'>
        <div className='cards-title'>Персонажи</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='cards-filter'>
            <Test/>
            <button onClick={modalOpen}>Модал</button>
            <NameFilter register={register}/>
            <Roles manager customer>
              <TypeFilter register={register}/>
            </Roles>
            <StatusFilter register={register}/>
            <SpeciesFilter register={register}/>
            <GenderFilter register={register}/>
            <div className='cards-filter-item'>
              <button type='submit' className='btn btn-primary'>Поиск</button>
            </div>
          </div>
        </form>
        <div className={'cards-box'}>
          {
            $persons.data.map(x => (
              <div className='card-box' key={x.id}>
                <img src={x.image} alt={x.name}/>
                <div className='card-info'>
                  <div className='card-name'>{x.name}</div>
                  {
                    x.type &&
                    <div className='card-status'>Type: {x.type}</div>
                  }
                  <div className='card-status'>Status: {x.status} <span className={`card-status-icon ${x.status.toLowerCase()}`}/></div>
                  <div className='card-status'>Species: {x.species}</div>
                </div>
              </div>
            ))
          }
        </div>
        <div className='pages'>
          <div className='page' onClick={() => pageHandler(1)}>{'<<'}</div>
          {
            pages.map(p => (
              <div key={p} className='page' onClick={() => pageHandler(p)}>
                {p}
              </div>))
          }
          <div className='page' onClick={() => pageHandler($persons.total)}>{'>>'}</div>
        </div>
      </div>
    </main>
  )
});
export {PersonsPage}
