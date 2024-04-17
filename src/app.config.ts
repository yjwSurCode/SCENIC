export default defineAppConfig({
   pages: [
      // VR 视频 图片
      'pages/video/index',
      'pages/web-view/index',
      'pages/index/index',
      // 吃 住 行 玩 特产 列表
      'pages/list/index',
      // 商家主页
      'pages/detail/index',
   ],
   window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
   },
});
