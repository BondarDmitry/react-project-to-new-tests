import React from "react";
import TeamsPage from "../teams";
import { shallow, mount } from "enzyme";
import API from "../../../services/index";

describe("Teams Page ", () => {
    test("Teams Page", async (done) => {
        const TeamsPageWrapper = shallow(<TeamsPage />);
        const TeamsPageInner = mount(TeamsPageWrapper.get(0));
        console.log(TeamsPageInner.state());
        setInterval(() => {
            TeamsPageInner.update();
            console.log(TeamsPageInner.debug());
            console.log(TeamsPageInner.state().teamsListData);
            done();
        }, 40);
    });
});
