import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
//import './styles/charts.scss';
import App from './components/App/App';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'

const store = configureStore();

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

