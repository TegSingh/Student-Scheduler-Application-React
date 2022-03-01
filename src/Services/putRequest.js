import axios from "axios";

const putRequest = async (url, body) => {
    console.log("PUT REQUEST: ", url);
    const response = await axios.put(url, body)
    console.log("Response Status: ", response.status);
    if (response.status === 200) {
        console.log("Reponse Data: ", response.data);
        return response.data;
    }
}

export default putRequest;