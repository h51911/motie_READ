import axios from 'axios';

const ListApi = axios.create({
    baseURL: 'https://app2.motie.com/ranking'
})

export const get = async (params, config = {}) => {
    let { data } = await ListApi.get('', {
        ...config,
        params
    })

    return data;
}

export default {
    get
}