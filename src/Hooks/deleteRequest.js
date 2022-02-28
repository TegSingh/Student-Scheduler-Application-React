import axios from "axios";

const deleteRequest = (url) => {
    console.log("DELETE REQUEST: ", url);
    axios.delete(url)
        .then(response => {
            console.log("Response Data: ", response.data)
            console.log("Response Status: ", response.status)
        })
        .catch((error) => {
            console.log("An Error has occured");
        })

}

export default deleteRequest;