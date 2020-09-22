import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

export const httpClient = ({
    post: (url, success, data) => axios.post(`${BASE_URL}/${url}`, data).then(success)
})