import request from "./request";

export function getSongUrl(id) {
  return request({
    url: '/song/url',
    params:{
      id
    }
  })
}

export function getSongDetail(id) {
  return request({
    url: '/album',
    params:{
      id
    }
  })
}

export class SongDetail{
  constructor(album){
    this.id = album.id
    this.picUrl = album.picUrl
    this.name = album.name
    this.artists = album.artists.reduce((pre, item) => pre + item.name + "/", "").slice(0, -1)
  }
}