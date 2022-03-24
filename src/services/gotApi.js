import axios from 'axios';

const gotApi = axios.create({
    baseURL: "https://www.anapioficeandfire.com/api"
})

export default gotApi