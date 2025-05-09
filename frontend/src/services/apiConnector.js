import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true
});

export const apiConnector = (method, url, bodyData = null, headers = null, params = null) => {
    try{
        return axiosInstance({
            method: method,
            url: url,
            data: bodyData,
            headers: headers,
            params: params,
        });
    }
    catch(error){
        throw error;
    }
}