//설명: NYTimes.com의 이메일, 공유 또는 조회수를 기반으로 가장 인기 있는 기사를 제공합니다.
// mostPopularAPI.js

import apiClient from './apiClient';

export const getMostEmailedArticles = (period) => {
  return apiClient.get(`/mostpopular/v2/emailed/${period}.json`);
};

export const getMostSharedArticles = (period, shareType = 'facebook') => {
  return apiClient.get(`/mostpopular/v2/shared/${period}/${shareType}.json`);
};

export const getMostViewedArticles = (period) => {
  return apiClient.get(`/mostpopular/v2/viewed/${period}.json`);
};
