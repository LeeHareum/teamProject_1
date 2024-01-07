//설명: 키워드로 기사를 검색할 수 있는 API입니다.
// articleSearchAPI.js

import apiClient from './apiClient';

export const searchArticles = (query, filter = '') => {
  return apiClient.get('/search/v2/articlesearch.json', {
    params: {
      q: query,
      fq: filter,
    },
  });
};
