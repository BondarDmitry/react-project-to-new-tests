import axios from "../utils/axios";

export default class API {
    getTeams = async () => await axios.get("/teams");
}
