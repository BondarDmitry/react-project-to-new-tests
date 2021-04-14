import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

const CalendarPage = () => {
    const { t } = useTranslation();

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const getHighLitedDates = () => {
        if (!startDate || !endDate) return [];
        const oneDayDuration = 86400;

        const duration =
            moment(endDate).unix() - moment(startDate).unix() + oneDayDuration;

        const durationOnDays =
            (moment(endDate).unix() - moment(startDate).unix()) /
                oneDayDuration +
            1;

        const currendDate = moment().format("DD MM YYYY");

        const sprintStartDate = moment(startDate).format("DD MM YYYY");

        const timeDifference =
            moment(currendDate, "DD MM YYYY").unix() -
            moment(startDate, "DD MM YYYY").unix();

        const daysQuantity = Math.floor(timeDifference / oneDayDuration);

        const sprintsQuantity = Math.ceil(
            (daysQuantity + 1) / (duration / 86400)
        );

        const createSprintDatesArr = (startDate, sprintDuration) => {
            const sprintDatesArr = [];
            let currentDate = moment(startDate, "DD MM YYYY");
            for (let i = 0; i < sprintDuration; i++) {
                sprintDatesArr.push(new Date(currentDate));
                currentDate = moment(currentDate, "DD MM YYYY").add(1, "d");
            }

            return sprintDatesArr;
        };

        const createSprintsArr = (
            startDate,
            sprintDuration,
            sprintsQuantity
        ) => {
            let sprintsArr = [];
            let currentSprintStartDate = moment(startDate, "DD MM YYYY");
            for (let i = 0; i < sprintsQuantity; i++) {
                sprintsArr.push(
                    createSprintDatesArr(currentSprintStartDate, sprintDuration)
                );
                currentSprintStartDate = moment(
                    currentSprintStartDate,
                    "DD MM YYYY"
                ).add(sprintDuration, "d");
            }

            return sprintsArr;
        };

        const sprintsArr = createSprintsArr(
            sprintStartDate,
            durationOnDays,
            sprintsQuantity
        );

        const createSprintsListForCalendar = () => {
            let color = 0;
            return sprintsArr.map((sprint) => {
                if (color > 3) color = 0;
                color = color + 1;
                const sprintClassName = `color-${color}`;
                const sprintObj = {};

                sprintObj[sprintClassName] = sprint;

                return sprintObj;
            });
        };

        console.group();
        console.log(currendDate);
        console.log(sprintStartDate);
        console.log(duration);
        console.log(durationOnDays);
        console.log(daysQuantity);
        console.log(sprintsQuantity);
        console.log(sprintsArr);
        console.log(createSprintsListForCalendar(sprintsArr));
        console.groupEnd();

        return createSprintsListForCalendar(sprintsArr);
    };

    return (
        <div>
            <h1 className="text-center">{t("pages.calendar")}</h1>
            <div>
                <h2>Calendar for select dates</h2>
                <DatePicker
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                />
                <div>
                    <p>
                        {startDate
                            ? moment(startDate).format("MM DD YYYYY")
                            : "No start date"}
                    </p>
                    <p>
                        {endDate
                            ? moment(endDate).format("MM DD YYYYY")
                            : "No end date"}
                    </p>
                </div>
            </div>
            <div>
                <h2>Calendar with selected dates</h2>
                <DatePicker
                    onChange={() => {}}
                    highlightDates={getHighLitedDates()}
                    inline
                />
            </div>
        </div>
    );
};

export default CalendarPage;
