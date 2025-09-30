import './App.css'
import { inject, observer } from 'mobx-react';
import { Status } from './Status';


const App = inject('$condition')(observer(props => {
  const { $condition } = props;

  const switchHandler = () => {
    $condition.isSwitched = !$condition.isSwitched
  }

  return (
    <main className='layout'>
      <div>
        <div  className='condition'>Кондиционер работает, только когда он включен, есть электричество, выключено отопление и закрыто окно</div>
        <div className='controls'>
          <button onClick={switchHandler}>
            Включатель <Status isOn={$condition.isSwitched} />
          </button>
          <button onClick={() => { $condition.isWindow = !$condition.isWindow }}>
            Окно <Status isOn={$condition.isWindow} />
          </button>
          <button onClick={() => { $condition.isElectric = !$condition.isElectric }}>
            Электричество <Status isOn={$condition.isElectric} />
          </button>
          <button onClick={() => { $condition.isHeating = !$condition.isHeating }}>
            Отопление <Status isOn={$condition.isHeating} />
          </button>
        </div>
        <div className='condition'>
          Состояние кондиционера <Status isOn={$condition.isEnabled} />
        </div>
      </div>
    </main>
  )
}));

export { App };
