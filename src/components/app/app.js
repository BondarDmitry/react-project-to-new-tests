import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { HomePage, NewsPage, EmojiPage, GoogleChartPage } from "../pages";

import "../../assets/bootstrap.min.css";

// import ChangeLang from "../changeLang/changeLang";
// import Article from "../article/article";

function App() {
    const { t, i18n } = useTranslation();
    return (
        <Router>
            <header
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 30px",
                }}
            >
                <nav className="navbar-nav" style={{ flexDirection: "row" }}>
                    <Link
                        className="nav-link"
                        style={{ marginRight: "20px" }}
                        to="/"
                    >
                        {t("pages.home")}
                    </Link>
                    <Link
                        className="nav-link"
                        style={{ marginRight: "20px" }}
                        to="/news"
                    >
                        {t("pages.news")}
                    </Link>
                    <Link
                        className="nav-link"
                        style={{ marginRight: "20px" }}
                        to="/google-chart"
                    >
                        {t("pages.google-chart")}
                    </Link>
                    <Link
                        className="nav-link"
                        style={{ marginRight: "20px" }}
                        to="/emoji"
                    >
                        {t("pages.emoji")}
                    </Link>
                </nav>
                <div>
                    <button
                        className="btn btn-outline-info"
                        onClick={() => i18n.changeLanguage("en")}
                        style={{ marginLeft: "10px" }}
                    >
                        en
                    </button>
                    <button
                        className="btn btn-outline-info"
                        onClick={() => i18n.changeLanguage("ru")}
                        style={{ marginLeft: "10px" }}
                    >
                        ru
                    </button>
                </div>
            </header>
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
                </Switch>
                {/* <p>{t("Login")}</p> */}
            </div>
        </Router>
    );
}

export default App;
