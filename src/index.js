import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import UserStore from './stores/userStore'

import { Provider } from 'mobx-react';

const Root = ( 
    <Provider UserStore= {UserStore}> 
        <App/ >
    </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
