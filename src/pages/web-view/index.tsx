/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-quotes */
import { View, WebView, Text } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import { AtButton } from 'taro-ui';
import React, { useEffect, useState } from 'react';
import { createBEM } from '../../utils/class-utils';
import TaroRequest, { baseUrl } from '../../utils/service/api';

import './index.scss';

const bem = createBEM('web-view-page');

export default function WebViewPage(): ReturnType<React.FC> {
   const { url = '', queryParams = '' } = useRouter().params;
   const [markerList, setMarkerList] = useState([]);
   const [markerType, setMarkerType] = useState('play');
   const [decodeUrl, setDecodeUrl] = useState<any>([]);
   // console.log(queryParams, 'params', JSON.parse(queryParams), decodeURIComponent(url + '?' + queryParams))
   console.log(url, queryParams, 'params');

   const onWebMessage = (e) => {
      console.log(e, 'eee');
      if (e.title == 'play') {
         console.log('111');
         setMarkerType('play');
         TaroRequest.get('http://localhost:9999/api/marker/list')
            .then((res) => {
               console.log('res111', res.data.data);
               const result = res.data.data.markerList.filter((item) => item.type === 'play');
               setMarkerList(result);
            })
            .then(() => {
               console.log('333');
               updateMap();
            });
      } else if (e.title == 'travel') {
         setMarkerType('travel');
         TaroRequest.get('http://localhost:9999/api/marker/list')
            .then((res) => {
               console.log('res111', res.data.data);
               const result = res.data.data.markerList.filter((item) => item.type === 'travel');
               setMarkerList(result);
            })
            .then(() => {
               console.log('333');
               updateMap();
            });
      }
   };
   const onWebLoad = () => {};
   const onWebError = () => {};

  //  Taro.onMessage(function (event) {
  //     console.log('小程序收到消息：', event.data);
  //  });

   const updateMap = () => {
      if (queryParams) {
         setDecodeUrl(decodeURIComponent(url + '?' + queryParams));
      } else {
         const params = markerList;
         console.log('2222', markerList);
         // let _url = `http://106.12.154.161/images/map/index.html`;
         //! 地图
         let _url = `http://127.0.0.1:5502/scenic/src/pages/video/map/map.html`;
         //! VR
         // let _url = `http://127.0.0.1:5501/three.js-dev/examples/webgl_panorama_cube.html`;
         const _decodeUrl: any = decodeURIComponent(_url + '?' + 'list=' + JSON.stringify(params));
         console.log(_decodeUrl, '_decodeUrl');
         setDecodeUrl(_decodeUrl);
      }
   };

   const queryMarkerList = () => {
      TaroRequest.get('http://localhost:9999/api/marker/list')
         .then((res) => {
            console.log('res111', res.data.data);
            const result = res.data.data.markerList.filter((item) => item.type === markerType);
            console.log(result, 'result');
            setMarkerList(result);
         })
         .then(() => {
            console.log('333');
            updateMap();
         });
   };

   useEffect(() => {
      console.log('markerType', markerType);
      queryMarkerList();
   }, []);

   useEffect(() => {
      updateMap();
   }, [decodeUrl]);

   return (
      <View className={bem()}>
         {/* <View className="switch-btn">
            <AtButton className="btn" type="primary" circle size="small">
               按钮文案
            </AtButton>
            <AtButton className="btn" type="primary" circle size="small">
               按钮文案
            </AtButton>
         </View> */}
         {decodeUrl !== '' ? (
            <View className="webview-box">
               <WebView
                  className="webview"
                  src={decodeUrl}
                  onMessage={onWebMessage}
                  onLoad={onWebLoad}
                  onError={onWebError}
               ></WebView>
            </View>
         ) : (
            <View>没找到对应的页面</View>
         )}
      </View>
   );
}
