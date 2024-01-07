// apiClient.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.nytimes.com/svc',
  params: {
    'api-key': 'VQHIv75aWkbk7h5LOVhymAntsvCsTamp',
  },
});

export default apiClient;
