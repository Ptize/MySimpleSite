import axios from "axios";

const baseUrl = "https://localhost:32768/"



export default {

    myName(url = baseUrl + 'myget/') {
        return {
            fetchMyName: () => axios.get(url + "name=IVAN"),
        }
    }
}