//설명: 주어진 월에 게시된 NYT 기사 배열을 반환하며, 1851년 이후로 거슬러 올라갈 수 있습니다.
// archiveAPI.js

import apiClient from './apiClient';

export const getArchive = (year, month) => {
  return apiClient.get(`/archive/v1/${year}/${month}.json`);
};
