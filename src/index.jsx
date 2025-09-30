import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';
import { ConditionStore } from './store';
import { App } from './App';
import { configure } from 'mobx';

configure({
  enforceActions:'never'
})

const stores = {
  $condition: new ConditionStore()
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider {...stores}>
    <App />
  </Provider>
);
