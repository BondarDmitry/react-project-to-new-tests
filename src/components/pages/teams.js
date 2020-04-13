import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import API from "../../services";
import TeamsList from "../teams-list/teams-list";

class TeamsPage extends Component {
    API = new API();
    state = {
        teamsListData: {
            loading: true,
            error: false,
            teamList: [],
        },
    };

    componentDidMount() {
        this.API.getTeams()
            .then((teamsListData) => {
                this.setState((state) => {
                    return {
                        ...state,
                        teamsListData: {
                            ...state.teamListData,
                            loading: false,
                            teamsList: teamsListData.data,
                        },
                    };
                });
            })
            .catch((error) => console.log(error));
    }

    render() {
        const { t } = this.props;
        return (
            <section className="teams-page">
                <h1 className="text-center">{t("pages.teams")}</h1>
                <div className="team-list ">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="text-center">Teams list</h3>
                                <TeamsList
                                    teamsListData={this.state.teamsListData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

// export default TeamsPage;
export default withTranslation()(TeamsPage);
