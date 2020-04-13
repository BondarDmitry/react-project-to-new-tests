import React from "react";
import { useTranslation } from "react-i18next";

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
