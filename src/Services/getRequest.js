// This file handles simple GET requests - Input URL
import axios from "axios";

const getRequest = async (url) => {
    const result = await axios.get(url);
    console.log("Fetch todos by ID: ", result);
    return result;
}

export default getRequest;
