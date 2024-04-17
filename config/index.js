const config = {
   projectName: 'scenic',
   date: '2024-4-16',
   designWidth: 750,
   deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2,
   },
   sourceRoot: 'src',
   outputRoot: 'dist',
   //! mock
   plugins: [
      [
         '@tarojs/plugin-mock',
         {
            //Mock 插件可以接受如下参数
            host: 'localhost', //	设置数据 mock 服务地址，默认为 127.0.0.1
            port: 9999, //设置数据 mock 服务端口，默认为 9527
            mocks: {
               //设置数据 mock 接口
               'GET /api/marker/list': {
                  statusCode: 200,
                  message: 'success',
                  data: {
                     scenicId: 1,
                     scenicName: '风山公园',
                     markerList: [
                        {
                           position: [26.870355, 100.2394],
                           content: 'Marker 1',
                           name: '我乐111',
                           type: 'play',
                           id: '1',
                        },
                        {
                           position: [26.860355, 100.2498],
                           content: 'Marker 2',
                           name: '你乐111',
                           type: 'play',
                           id: '2',
                        },
                        {
                           position: [26.850355, 100.2394],
                           content: 'Marker 1',
                           name: '我乐222',
                           type: 'travel',
                           id: '1',
                        },
                        {
                           position: [26.840355, 100.2498],
                           content: 'Marker 2',
                           name: '你乐222',
                           type: 'travel',
                           id: '2',
                        },
                     ],
                  },
               },
               'GET /api/video/list': {
                  statusCode: 200,
                  message: 'success',
                  data: {
                     scenicId: 1,
                     scenicName: '风山公园',
                     resourceList: [
                        {
                           id: 0,
                           type: 'video', // photo  video
                           username: '李晓',
                           userType: 'visitor', // visitor business
                           likes: 9444,
                           comments: 6340,
                           poster: 'http://106.12.154.161/images/task-empty.png',
                           uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
                           tags: '#testvideo #reactnative #tiktok #git #development #github #clone #react',
                           music: 'Introducing Chromecast. The easiest way to enjoy',
                        },
                        {
                           id: 0,
                           type: 'photo',
                           username: '李晓',
                           userType: 'visitor', // visitor business
                           likes: 9444,
                           comments: 6340,
                           photoList: [
                              'http://106.12.154.161/images/task-empty.png',
                              'http://106.12.154.161/images/四合院.png',
                           ],
                           uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
                           tags: '#testvideo #reactnative #tiktok #git #development #github #clone #react',
                           music: 'Introducing Chromecast. The easiest way to enjoy',
                        },
                     ],
                  },
               },
            },
         },
      ],
   ],
   defineConstants: {},
   copy: {
      patterns: [],
      options: {},
   },
   alias: {
      // "@/src": resolve(__dirname, "..", "src"),
   },
   framework: 'react',
   compiler: 'webpack5',
   cache: {
      enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
   },
   mini: {
      postcss: {
         pxtransform: {
            enable: true,
            config: {},
         },
         url: {
            enable: true,
            config: {
               limit: 1024, // 设定转换尺寸上限
            },
         },
         cssModules: {
            enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
            config: {
               namingPattern: 'module', // 转换模式，取值为 global/module
               generateScopedName: '[name]__[local]___[hash:base64:5]',
            },
         },
      },
   },
   h5: {
      publicPath: '/',
      staticDirectory: 'static',
      postcss: {
         autoprefixer: {
            enable: true,
            config: {},
         },
         cssModules: {
            enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
            config: {
               namingPattern: 'module', // 转换模式，取值为 global/module
               generateScopedName: '[name]__[local]___[hash:base64:5]',
            },
         },
      },
   },
};

module.exports = function (merge) {
   if (process.env.NODE_ENV === 'development') {
      return merge({}, config, require('./dev'));
   }
   return merge({}, config, require('./prod'));
};
