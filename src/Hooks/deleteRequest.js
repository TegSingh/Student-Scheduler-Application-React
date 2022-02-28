import axios from "axios";

const deleteRequest = (url) => {
    console.log("DELETE REQUEST: ", url);
    axios.delete(url)
        .then(response => {
            console.log("Response Status: ", response.status)
            if (response.status === 200) {
                console.log("Response Data: ", response.data)
                return response.data;
            }
        })
        .catch((error) => {
            console.log("An Error has occured");
        })

}

export default deleteRequest;