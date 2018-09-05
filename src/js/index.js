// JavaScript source code


import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
    );


//-- CASE 1 the following line can be uncommented and we can test the store dispatch, subscribe and getstate() from browser console.
//import store from "../js/store/index";
//import { addArticle } from "../js/actions/index";

//window.store = store;
//window.addArticle = addArticle;