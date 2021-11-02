## my-usic
### 在线预览地址 [点我预览](https://thewarming.github.io/my-music/)

## 项目介绍

一个零基础自学vue后的练手项目，仿写网易云音乐移动端的页面（Vue + Vue-router + axios + better-scroll），
通过vue-cli创建项目后，全程参考网易云音乐移动端页面一步步从零构建。

其中获取数据利用的[网易云api](https://github.com/Binaryify/NeteaseCloudMusicApi)

（网易云音乐移动端页面较为简单，只为了练习巩固vue的使用）

## 运行项目

1. 运行本地后端接口([网易云api](https://github.com/Binaryify/NeteaseCloudMusicApi))
   运行方式参考[API接口转发文档](https://jsososo.github.io/QQMusicApi)。

2. 运行

```shell
cd my-music
npm install
npm run serve
```

## 图例

### 推荐页
![Image](https://github.com/TheWarming/my-music/blob/main/src/assets/img/example/recommend.png)  

基本上与原官方页面抱持一致，展示最新的音乐与推荐歌单,点击分别可以进入播放页和歌单页面
上方的 推荐、热歌榜、搜索  是通过vue-router进行页面切换。

### 播放页
![Image](https://github.com/TheWarming/my-music/blob/main/src/assets/img/example/play4.png)
![Image](https://github.com/TheWarming/my-music/blob/main/src/assets/img/example/play2.png)
![Image](https://github.com/TheWarming/my-music/blob/main/src/assets/img/example/play3.png)  

播放页面上实现了音乐播放时，cd封面图会旋转，音乐停止时则会停止，并有歌词滑动效(lyric-parser + better-scroll来实现)
点击下方的箭头会直接滑动到下方的相关推荐的信息栏

### 搜索
![Image](https://github.com/TheWarming/my-music/blob/main/src/assets/img/example/search1.png)
![Image](https://github.com/TheWarming/my-music/blob/main/src/assets/img/example/search2.png)  

在输入框内填入信息后，可以点击左侧的放大镜进行搜索。也可以直接点击下方的热门关键词进行搜索。
可以通过下滑更新获得更多的搜索结果
除了基本搜索功能，还有本地历史搜索信息功能，通过localStorage存储

### 热歌榜
![Image](https://github.com/TheWarming/my-music/blob/main/src/assets/img/example/hot.png)  

展示热歌榜信息，并且增加了向下滑动获得更多的热门歌曲

### 歌单页
![Image](https://github.com/TheWarming/my-music/blob/main/src/assets/img/example/playlist1.png)
![Image](https://github.com/TheWarming/my-music/blob/main/src/assets/img/example/playlist2.png)  

展示歌单的信息





