import request from "./request";

export function getRecommendPlaylistData(limit) {
  return request({
    url: '/personalized',
    params:{
      limit
    }
  })
}

export function getNewSongData(limit) {
  return request({
    url: '/personalized/newsong',
    params:{
      limit
    }
  })
}