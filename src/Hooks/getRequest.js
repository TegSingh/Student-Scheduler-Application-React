// This file handles simple GET requests - Input URL
import axios from "axios";

const getRequest = (url) => {
    console.log("GET REQUEST: ", url);
    axios.get(url)
        .then(response => {
            console.log("Request Status: ", response.status);
            console.log("Data: ", response.data);
        })
}

export default getRequest;