import React from "react";
import { useTranslation } from "react-i18next";
import SankeyChart from "../sankey-chart/sankey-chart";

import EmojiComponent from "../emoji/ emoji-component";

const HomePage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1 className="text-center">
                {t("pages.home")} {t("pages.page")}
            </h1>
        </div>
    );
};

export default HomePage;
