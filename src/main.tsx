import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {Router} from './routes/index'
import { AliveScope } from 'react-activation'
import { Provider } from 'react-redux';
import store from '@/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <AliveScope> 
        <Router/>
      </AliveScope>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>,
)
