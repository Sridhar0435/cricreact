import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from "redux"; // middleware is to provide middleware like thunk
import thunk from "redux-thunk";// to perform asyuc task or performance
import { Provider } from "react-redux";//to communicate with react and redux

import seriesReducer from "./redux/seriesReducer";
import matchDetailReducer from "./redux/matchReducer";
import teamReducer from "./redux/TeamReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // to access dev tools in chrome debug
const reducers = combineReducers({
    series: seriesReducer,
    matchDetail: matchDetailReducer,
    teamId: teamReducer
})
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
//wrap app betweeen provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
