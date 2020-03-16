import React from "react";
import { useTranslation } from "react-i18next";
import ArticleList from "../article-list/article-list";

const NewsPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1 className="text-center">{t("pages.news")}</h1>
            <ArticleList />
        </div>
    );
};

export default NewsPage;
