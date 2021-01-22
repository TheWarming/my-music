import request from "./request";

export function getSearchHotData() {
  return request({
    url: '/search/hot',
  })
}