import axios from "axios";

const deleteRequest = async (url) => {
    console.log("DELETE REQUEST: ", url);
    const response = await axios.delete(url)
    console.log("Response Status: ", response.status)
    if (response.status === 200) {
        console.log("Response Data: ", response.data)
        return response.data;
    }
}

export default deleteRequest;