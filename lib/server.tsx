import axios from 'axios';

const SERVER_BASE = ''

enum HTTP_Requests {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT'
}

const request = async (url: string, params, method: HTTP_Requests = HTTP_Requests.GET) => {
    var response;
    switch (method) {
        case HTTP_Requests.GET:
            response = await axios.get(SERVER_BASE + url, {params: params});
            break;
        case HTTP_Requests.POST:
            response = await axios.post(SERVER_BASE + url, params);
            break;
        case HTTP_Requests.PUT:
            response = await axios.put(SERVER_BASE + url, params);
            break;
    }

    if (response.status !== 200) {
        return generateErrorResponse('The server responded with an unexpected status.');
    }

    const result = response.data;

    return result;

}

const generateErrorResponse = (message) => {
    return {
        status : 'error',
        message
    };
}
