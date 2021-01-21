import request from "./request";

export function getHotSongData(id) {
  return request({
    url: '/playlist/detail',
    params:{
      id
    }
  })
}