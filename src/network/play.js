import request from "./request";

//歌曲url urlid
export function getSongUrl(id) {
  return request({
    url: '/song/url',
    params:{
      id
    }
  })
}

//歌曲信息  
export function getSongDetail(id) {
  return request({
    url: '/album',
    params:{
      id
    }
  })
}


//歌曲相关歌单 urlid
export function getSimiPlaylist(id) {
  return request({
    url: '/simi/playlist',
    params:{
      id
    }
  })
}

//相关歌曲 urlid
export function getSimiSong(id) {
  return request({
    url: '/simi/song',
    params:{
      id
    }
  })
}

//热门评论 urlid
export function getHotComment(id) {
  return request({
    url: '/comment/hot',
    params:{
      id,
      type:0
    }
  })
}

export class SongDetail{
  constructor(album){
    this.id = album.id
    this.picUrl = album.picUrl
    this.name = album.name
    this.artists = album.artists.reduce((pre, item) => pre + item.name + "/", "").slice(0, -1)
    this.blurPicUrl = album.blurPicUrl
  }
}