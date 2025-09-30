import React from 'react';
import './App.css'
import {observable,computed} from 'mobx';
import {inject, observer} from 'mobx-react';

class ConditionStore {
  @observable isSwitched = false;
  @observable isWindow = false;
  @observable isElectric = false;
  @observable isCentral = false;

  @computed get isEnabled(){
    return this.isSwitched && this.isWindow && this.isElectric && this.isCentral
  }
}

const Status = props => {
  return props.isOn?'on':'off'
}
//debugger;

const App = inject('$condition')(observer(props => {
  const {$condition} = props;
  
  const switchHandler = () =>{
    $condition.isSwitched = !$condition.isSwitched
  }
  
  console.log($condition.isWindow)
  
  return (
    <main>
      <button onClick={switchHandler}>
        Включатель <Status isOn={$condition.isSwitched}/>
      </button>
      <button onClick={ ()=>{$condition.isWindow=!$condition.isWindow}}>
        Окно <Status isOn={$condition.isWindow}/>
      </button>
      <button onClick={()=>{$condition.isElectric=!$condition.isElectric}}>
        Электричество <Status isOn={$condition.isElectric}/>
      </button>
      <button onClick={()=>{$condition.isCentral=!$condition.isCentral}}>
        Центральный <Status isOn={$condition.isCentral}/>
      </button>
    </main>
  )
}))

export {ConditionStore, App}
