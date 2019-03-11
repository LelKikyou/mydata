import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import reduxMoudle from "./redux"
import {BrowserRouter, Route, Link} from "react-router-dom"
import Login from "CON/login"
import Register from "CON/register"
import AuthRoute from "COM/authRoute"
import "./reset.css"

const store = createStore(reduxMoudle, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="container">
                <AuthRoute></AuthRoute>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

