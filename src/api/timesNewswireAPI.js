//설명: 뉴욕타임스의 기사가 게시되자마자 링크와 메타데이터를 제공합니다.
// timesNewswireAPI.js

import apiClient from './apiClient';

export const getLatestArticles = (source = 'all', section = 'all') => {
  return apiClient.get(`/news/v3/content/${source}/${section}.json`);
};

export const getSectionList = () => {
  return apiClient.get('/news/v3/content/section-list.json');
};
