import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import reduxMoudle from "./redux"
import {BrowserRouter, Route,Switch} from "react-router-dom"
import Login from "CON/login"
import Register from "CON/register"
import Bossinfo from "CON/bossinfo"
import Geniusinfo from "CON/geniusinfo"
import Dashboard from "CON/dashboard"
import AuthRoute from "COM/authRoute"
import "./reset.css"

const store = createStore(reduxMoudle, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="container">
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path="/bossinfo" component={Bossinfo}></Route>
                    <Route path="/geniusinfo" component={Geniusinfo}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route component={Dashboard}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

