import axios from "axios";

const URL = "http://infuse.scount.in/WebApi/api/"
export let webBaseUrl = 'http://suq.scount.in/';
// const URL = "https://localhost:44330/api"
// export const webBaseUrl = "https://localhost:44348/"
// let URL = 'http://infuse.scount.in/WebApi/api';

const instance = axios.create({
    baseURL: URL,
    // headers:{

    // }
})


const requestHandler = request => {
    return request;
};

const responseHandler = response => {
    return response;
};

const errorHandler = error => {
    console.log(error.response.status);
    if (error.response.status === 403) {
        // console.log(error.status);
        // console.log("403 error found");
        window.localStorage.removeItem("user")
        window.location = '/';
        // window.location.reload();
    }
    return Promise.reject(error);
};

instance.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

instance.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
);

export default instance