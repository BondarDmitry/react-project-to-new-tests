import React from "react";
import { useTranslation } from "react-i18next";

const Article = ({ article }) => {
    const [t, i18n] = useTranslation();
    console.log(article);
    return <p>{t(article)}</p>;
};

export default Article;
