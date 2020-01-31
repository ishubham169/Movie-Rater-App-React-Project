import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import {Router, Browser} from 'react-router-dom';

const context = React.createContext();
export const CnxtConsumer = context.Consumer;


const animals = ['ll', 'pp', 'qq'];
const routing = (
    <BrowserRouter>
        <context.Provider value = {{animals: animals}}>
            <div>>
                <Route path="/" component={App}></Route>
                <Route path="/header" component={Header}></Route>
                <Route path="/footer" component={Footer}></Route>
            </div>
        </context.Provider>
    </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
