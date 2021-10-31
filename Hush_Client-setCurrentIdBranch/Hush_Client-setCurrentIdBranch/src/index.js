import React from 'react';
import ReactDOM from 'react-dom';

//initialize redux... keep 
import { Provider } from 'react-redux'; // keep track of the store... 
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import './index.css';

import reducers from './reducers';    //from the redux/reducer/index.js file.. 

//import root component... 
import App from './App';


//create the store first... 
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));