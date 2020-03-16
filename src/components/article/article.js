import React from "react";
import { useTranslation } from "react-i18next";

const Article = ({ article }) => {
    const { t } = useTranslation();
    console.log(article);
    return (
        <div className="card text-white bg-dark m-3">
            <div className="card-header">
                {t(`article_list.${article}.title`)}
            </div>
            <div className="card-body">
                <p className="card-text">{t(`article_list.${article}.text`)}</p>
            </div>
        </div>
    );
};

export default Article;
