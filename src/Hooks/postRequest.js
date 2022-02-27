import axios from "axios";

const postRequest = (url, body) => {

    console.log("POST REQUEST: ", url, body);

    axios.post(url, body)
        .then(response => {
            console.log("Response: ", response.data);
            console.log("Data: ", response.status);
            console.log("Response Body: ", response.body)
        })
        .catch((error) => {
            console.log("There has been error!");
        })
}

export default postRequest;