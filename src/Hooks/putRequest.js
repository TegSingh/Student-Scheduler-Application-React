import axios from "axios";

const putRequest = (url, body) => {
    console.log("PUT REQUEST: ", url);
    axios.put(url, body)
        .then(response => {
            console.log("Response Status: ", response.status);
            if (response.status === 200) {
                console.log("Reponse Data: ", response.data);
                return response.data;
            }
        })
        .catch((error) => {
            console.log("An error has occured")
        })
}

export default putRequest;