import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import MovieDetails from './Pages/MoviesDetails/MovieDetails';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';

export default class MainRouter extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/:movieID" component={MovieDetails} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </Router>
        )
    }
}
