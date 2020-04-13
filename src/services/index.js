import axios from "../utils/axios";

export default class API {
    getTeams = async () => {
        try {
            return await axios.get("/teams");
        } catch (error) {
            console.log(error);
        }
    };
}
