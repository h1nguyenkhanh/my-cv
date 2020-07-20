import React from 'react';
import { Route, Switch } from "react-router-dom";
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import News from '../components/News';
import NewsDetail from '../components/NewsDetail';

function MyRouter() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/portfolio">
                <Portfolio />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/news">
                <News />
            </Route>
            <Route exact path="/news-detail/:title.:id">
                <NewsDetail />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
        </Switch>
    )
}

export default MyRouter
