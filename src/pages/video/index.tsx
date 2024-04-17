/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-indent-props */
import { View, WebView, ScrollView, Swiper, SwiperItem, Video, Text, Image } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import React, { useEffect, useRef, useState } from 'react';
import { createBEM } from '../../utils/class-utils';
// import { appendSearchParams } from '@/utils/history-utils';
import { appendSearchParams } from '../../utils/history-utils';

// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

import TaroRequest, { baseUrl } from '../../utils/service/api';

// import videoMockList from '../../assets/video.json';
import Star from '../../components/Star/index';

import './index.scss';

const bem = createBEM('web-view-page');

export default function VideoPage(): ReturnType<React.FC> {
   const { url = '' } = useRouter().params;

   const [pageInfoList, setPageInfoList] = useState<any>([]);

   const TMap = useRef();
   const handleWebView = () => {
      const params = [{ position: [30, 114], content: 'Marker 1' }];

      Taro.redirectTo({
         url: appendSearchParams('/pages/web-view/index', {
            url: `http://localhost:3000/`,
            queryParams: JSON.stringify(params),
         }),
      });
   };

   const initPage = () => {
      TaroRequest.get(
         'http://localhost:9999/api/video/list',
         // {
         //    userId: Taro.getStorageSync('userId'), //todo 返回的openid
         // },
         // {
         // contentType: 'application/json',
         // Authorization: user.userToken,
         // },
      ).then((res) => {
         console.log('res', res.data.data, res.data.scenicId);
         setPageInfoList(res.data.data);
         Taro.hideLoading();
      });
   };

   const handleSwiperChange = (e) => {
      console.log(e.currentTarget.current, 'e');
      console.log(pageInfoList, 'pageInfoList111');
   };

   useEffect(() => {
      initPage();
   }, []);

   return (
      <View className={bem()}>
         {/* video */}
         {/* <Text>{JSON.stringify(pageInfoList?.resourceList)}</Text> */}
         <Swiper
            className="page-swiper"
            indicatorColor="#999"
            indicatorActiveColor="#333"
            vertical
            circular
            indicatorDots={false}
            autoplay={false}
            onChange={(e) => handleSwiperChange(e)}
         >
            {(pageInfoList?.resourceList || []).map((item: any, index) => {
               return (
                  // <Text>{JSON.stringify(item)}</Text>
                  <SwiperItem className="pageSwiperItem" key={index}>
                     {<View></View>}
                     {item.type == 'video' && (
                        <Video
                           id="video"
                           className="swiper-video"
                           src={item.uri}
                           poster={item.poster}
                           //是否开启播放手势，即双击切换播放/暂停
                           playBtnPosition="center"
                           // 当跳转到其它小程序页面时，是否自动暂停本页面的视频
                           enablePlayGesture
                           // showPlayBtn={true}
                           // 是否显示全屏按钮
                           // showProgress={false}
                           // 是否展示底部进度条
                           // nativeProps={true}
                           posterSize="true"
                           // 初始化进度
                           initialTime={0}
                           // controls={true}
                           autoplay={false}
                           loop={false}
                           muted={false}
                           objectFit="contain"
                        />
                     )}
                     {item.type == 'photo' && (
                        <Swiper
                           className="photo-swiper"
                           indicatorColor="#999"
                           indicatorActiveColor="#333"
                           vertical={false}
                           circular
                           indicatorDots
                           autoplay
                        >
                           {(item.photoList || []).map((_item: any, _index) => {
                              return (
                                 <SwiperItem className="photo-swiperItem" key={_index}>
                                    <Image src={_item} className="swiper-image"></Image>
                                 </SwiperItem>
                              );
                           })}
                        </Swiper>
                     )}
                     {/* // action */}
                     <Star></Star>
                  </SwiperItem>
               );
            })}
         </Swiper>
      </View>
   );
}
