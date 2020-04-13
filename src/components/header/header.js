import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t, i18n } = useTranslation();
    return (
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
                <Link
                    className="nav-link"
                    style={{ marginRight: "20px" }}
                    to="/teams"
                >
                    {t("pages.teams")}
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
    );
};

export default Header;
