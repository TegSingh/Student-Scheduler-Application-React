import axios from "axios";

const postRequest = async (url, body) => {

    console.log("POST REQUEST: ", url, body);

    const response = await axios.post(url, body);
    if (response.status === 200) {
        console.log("Response Data: ", response.data);
        console.log("Response Body: ", response.body)
        return response.data;
    }

}

export default postRequest;