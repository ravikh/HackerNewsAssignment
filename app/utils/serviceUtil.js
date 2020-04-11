import axios from 'axios';

const fetch = (endpoint, options = {}) => {
    return axios.get(endpoint, options);
}

export default fetch;