import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
        <Router>
            <div>
                <StateProvider initialState={initialState} reducer={reducer}>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/shop" component={Shop} />
                        <Route path="/pages" component={Page} />
                        <Route path="/contact" component={Contact} />
                        <Route component={NotFound} />
                    </Switch>
                </StateProvider>
            </div>
        </Router>

    )


}
export default ShopApp;