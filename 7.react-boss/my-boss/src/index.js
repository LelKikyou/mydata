import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import {counter} from "./store/index"
import {BrowserRouter,Route,Link} from "react-router-dom"
const store = createStore(counter, applyMiddleware(thunk));
function hh(){
    return <h1>hhhhh</h1>
}
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">1</Link>
                    </li>
                    <li>
                        <Link to="/hh">2</Link>
                    </li>
                </ul>
                <Route path="/" exact component={App}></Route>
                <Route path="/hh" component={hh}></Route>
            </div>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));
