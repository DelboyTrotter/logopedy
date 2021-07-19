import axios from 'axios';

const baseUrl = process.env.VUE_APP_BASE_URL || '/';

export const getProfiles = () => axios.get(`${baseUrl}mocks/profiles.json`).then((response) => response.data);