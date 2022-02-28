import axios from "axios";

const putRequest = (url, body) => {
    console.log("PUT REQUEST: ", url);
    axios.put(url, body)
        .then(response => {
            console.log("Reponse Data: ", response.data);
            console.log("Response Status: ", response.status);
        })
        .catch((error) => {
            console.log("An error has occured")
        })
}

export default putRequest;