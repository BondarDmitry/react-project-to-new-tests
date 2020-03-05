import React from "react";

import { useTranslation } from "react-i18next";

// import ChangeLang from "../changeLang/changeLang";
// import Article from "../article/article";

function App() {
    const { t, i18n } = useTranslation();
    return (
        <div className="app">
            <h1>App</h1>
            <div>
                <button onClick={() => i18n.changeLanguage("en")}>en</button>
                <button onClick={() => i18n.changeLanguage("ru")}>ru</button>
            </div>
            <p>{t("pages.Security")}</p>
            <p>{t("Login")}</p>
            {/* <h1>App Component</h1>
            <ChangeLang />
            <p>{t("Settings")}</p> */}
            {/* <Article article="Settings" />
            <Article article="Dashboard" />
            <Article article="Login" />
            <Article article="Logout" /> */}
        </div>
    );
}

export default App;

// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { useTranslation, Trans } from "react-i18next";

// export default function App() {
//     const { t, i18n } = useTranslation();

//     const changeLanguage = lng => {
//         i18n.changeLanguage(lng);
//     };

//     const index = 11;

//     return (
//         <div className="App">
//             <div className="App-header">
//                 <h2>{t("Welcome to React")}</h2>
//                 <button onClick={() => changeLanguage("de")}>de</button>
//                 <button onClick={() => changeLanguage("en")}>en</button>
//             </div>
//             <div className="App-intro">
//                 <Trans>
//                     To get started, edit <code>src/App.js</code> and save to
//                     reload.
//                 </Trans>
//                 <Trans i18nKey="welcome">trans</Trans>
//                 <Trans>
//                     {index + 1} <a>xxx</a>
//                 </Trans>
//             </div>
//             <div style={{ marginTop: 40 }}>
//                 Learn more:&nbsp;
//                 <a href="https://react.i18next.com">https://react.i18next.js</a>
//             </div>
//         </div>
//     );
// }
