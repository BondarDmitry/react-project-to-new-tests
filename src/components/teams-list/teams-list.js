import React from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

const TeamsList = ({ teamsListData }) => {
    const { teamsList, loading, error } = teamsListData;

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <ErrorIndicator error={error} />;
    }

    if (teamsList) {
        return (
            <ul className="list-group display-flex justify-content-center">
                {teamsList.map((team) => (
                    <li className="list-group-item" key={team.name}>
                        {team.name}
                    </li>
                ))}
            </ul>
        );
    }
};

export default TeamsList;
