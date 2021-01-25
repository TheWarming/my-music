import request from "./request";

//歌单详情
export function getPlaylistInfo(id) {
  return request({
    url: '/playlist/detail',
    params:{
      id
    }
  })
}

//获取评论
export function getComment(id){
  return request({
    url:'/comment/playlist',
    params:{
      id
    }
  })
}

export class HeaderInfo{
  constructor(playlist){
    this.name = playlist.name;
    this.desc = playlist.description;
    this.creatorName = playlist.creator.nickname;
    this.creatorAvatar = playlist.creator.avatarUrl;
    this.cover = playlist.coverImgUrl
    this.playCount = playlist.playCount
  }
}