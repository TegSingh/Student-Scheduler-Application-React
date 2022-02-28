// This file handles simple GET requests - Input URL
import axios from "axios";

const getRequest = (url) => {
    console.log("GET REQUEST: ", url);
    axios.get(url)
        .then(response => {
            console.log("GET REQUEST: Request Status: ", response.status);
            if (response.status === 200) {
                console.log("GET REQUEST: Data: ", response.data);
                return response.data;
            }
        })
}

export default getRequest;