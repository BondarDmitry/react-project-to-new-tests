import React from "react";
import { useTranslation } from "react-i18next";

const ChangeLang = () => {
    const { t, i18n } = useTranslation();
    return (
        <select
            name="changeLang"
            id="changeLang"
            onChange={event => {
                i18n.changeLanguage(event.target.value);
            }}
        >
            <option value="en">En</option>
            <option value="ru">Ru</option>
        </select>
    );
};

export default ChangeLang;
