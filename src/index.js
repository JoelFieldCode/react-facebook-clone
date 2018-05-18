import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Route} from 'react-router-dom';
import axios from 'axios';

axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
    }, function (error) {
    // unauthorized, route to login
    if(error.response.status === 401){
        window.location.href = "/#/login";
    }

    return Promise.reject(error);
});

axios.defaults.withCredentials = true

ReactDOM.render(
    <HashRouter>
        <Route path="/" component={App}/>
    </HashRouter>,
    document.getElementById('root')
);
registerServiceWorker();
