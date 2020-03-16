import React from "react";
import Article from "../article/article";

const ArticleList = () => {
    return (
        <div style={{ display: "flex" }}>
            <Article article="first_article" />
            <Article article="second_article" />
        </div>
    );
};

export default ArticleList;
