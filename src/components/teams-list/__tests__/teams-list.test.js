import React from "react";
import TeamList from "../teams-list";
import { shallow } from "enzyme";
import TeamsList from "../teams-list";
import Spinner from "../../spinner";

describe("Teams List", () => {
    let initialProps = {
        loading: true,
        error: false,
        teamsList: [],
    };
    test("test loading", () => {
        const TeamsListWrapper = shallow(
            <TeamsList teamsListData={initialProps} />
        );
        expect(TeamsListWrapper.contains(<Spinner />)).toBeTruthy();
    });
    test("test data", () => {
        let newProps = {
            ...initialProps,
            loading: false,
            teamsList: [{ name: "John Team" }],
        };
        const TeamsListWrapper = shallow(
            <TeamsList teamsListData={newProps} />
        );

        expect(TeamsListWrapper.find("li")).toHaveLength(1);
        expect(TeamsListWrapper.find("li").text()).toBe("John Team");
    });
});
