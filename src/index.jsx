import ReactDOM from 'react-dom/client';
import {Provider} from 'mobx-react';
import {configure} from 'mobx';
import {stores} from "./stores/index.js";
import {Routes} from "./routes.jsx";
import {Layout} from "./components/Layout.jsx";

configure({
  enforceActions: 'never'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider {...stores}>
    <Layout>
      <Routes/>
    </Layout>
  </Provider>
);
