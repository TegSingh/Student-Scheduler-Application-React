import axios from "axios";

const postRequest = (url, body) => {

    console.log("POST REQUEST: ", url, body);

    axios.post(url, body)
        .then(response => {
            console.log("Data: ", response.status);
            if (response.status === 200) {
                console.log("Response: ", response.data);
                console.log("Response Body: ", response.body)
                return response.data;
            }
        })
        .catch((error) => {
            console.log("There has been error!");
        })
}

export default postRequest;