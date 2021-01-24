import request from "./request";

export function getSearchHotData() {
  return request({
    url: '/search/hot',
  })
}

//搜索数据
export function getSearchData(keywords) {
  return request({
    url: '/cloudsearch',
    params:{
      keywords,
      limit:20
    }
  })
}