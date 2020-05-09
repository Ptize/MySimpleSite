import axios from "axios";

const baseUrl = "https://localhost:32772/"



export default {

    myName(url = baseUrl + 'myget/') {
        return {
            fetchMyName: (name) => axios.get(url + "name="+ name),
        }
    }
}