import axios from 'axios';

const baseUrl = process.env.VUE_APP_BASE_URL || '/';

export const getBillings = () => axios.get(`${baseUrl}mocks/billings.json`).then((response) => response.data);