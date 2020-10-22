import React from 'react';
import { Switch, Route } from 'react-router-dom';

import "./ShopApp.css"

import Header from './header/Header';
import Home from './home/Home';

import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';
import Shop from './Shop';


const NotFound = () => <h1>Not Found</h1>

const ShopApp = () => {
    return (
        <div>
            <StateProvider initialState={initialState} reducer={reducer}>
                <Header />
                <Switch>
                    <Route path="/tienda" component={Shop} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </StateProvider>
        </div>
    )


}
export default ShopApp;