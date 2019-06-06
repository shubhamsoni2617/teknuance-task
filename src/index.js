import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './store/reducers'
import thunk from 'redux-thunk'

const store=createStore(reducers, applyMiddleware(thunk))

const provider=<Provider store={store}>
                    <App />
               </Provider>

ReactDOM.render(provider, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

