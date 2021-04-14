import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../header/header";
import {
    HomePage,
    NewsPage,
    EmojiPage,
    GoogleChartPage,
    TeamsPage,
    ReactHooksPage,
    CalendarPage,
    ContextPage
} from "../pages";

import "../../assets/bootstrap.min.css";

const App = () => {
    return (
        <Router>
            <Header />
            <div className="app">
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/news">
                        <NewsPage />
                    </Route>
                    <Route exact path="/google-chart">
                        <GoogleChartPage />
                    </Route>
                    <Route exact path="/emoji">
                        <EmojiPage />
                    </Route>
                    <Route exact path="/teams">
                        <TeamsPage />
                    </Route>
                    <Route exact path="/react-hooks">
                        <ReactHooksPage />
                    </Route>
                    <Route exact path="/calendar">
                        <CalendarPage />
                    </Route>
                    <Route exact path="/context">
                        <ContextPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
