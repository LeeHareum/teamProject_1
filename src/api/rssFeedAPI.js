//설명: 특정 섹션에 현재 게시된 기사 배열을 반환합니다.
// topStoriesAPI.js

import apiClient from "./apiClient";
// import axios from 'axios'; // axios import 추가

export const getTopStories = (US) => {
  return apiClient.get(`/topstories/v2/${US}.json`);
};
