import React from 'react';
import { Switch, Route } from 'react-router-dom';

import "./ShopApp.css"

import Header from './header/Header';
import Home from './home/Home';

import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';
import Shop from './Shop';


const NotFound = () => <h1 style={{ color: 'steelblue' }}>I m The Not Found Page</h1>
const Contact = () => <h1 style={{ color: 'steelblue' }}>I m The Contact Page</h1>
const Page = () => <h1 style={{ color: 'steelblue' }}>I m The Page "Page"</h1>

const ShopApp = () => {
    return (
        <div>
            <StateProvider initialState={initialState} reducer={reducer}>
                <Header />
                <Switch>
                    <Route path="/shop" component={Shop} />
                    <Route exact path="/pages" component={Page} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </StateProvider>
        </div>
    )


}
export default ShopApp;