/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-quotes */
import { Component, useRef, useState, useEffect } from 'react';
import Taro, { useRouter } from '@tarojs/taro';
import { AtList, AtListItem, AtIcon } from 'taro-ui';
import { View, WebView, ScrollView, Swiper, SwiperItem, Video, Text } from '@tarojs/components';
// import { useDispatch, useSelector } from "react-redux";

import TaroRequest, { baseUrl } from '../../utils/service/api';

import './index.scss';

export default function Login(): ReturnType<Taro.FC> {
   const router = useRouter();
   //   const dispatch = useDispatch();
   //   const order: OrderStatus = useSelector((state: StoreStatus) => state.order);

   useEffect(() => {
      Taro.showLoading({
         title: 'Loading...',
         mask: true,
      });

      // initMarketData();
   }, []);
   return (
      <View className="index">
         <Video
            id="video"
            src="https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
            poster="https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg"
            initialTime={0}
            // controls={true}
            autoplay={false}
            loop={false}
            muted={false}
         />
      </View>
   );
}

Login.config = {
   navigationBarTitleText: '我的',
   navigationStyle: 'custom',
   enablePullDownRefresh: true,
   backgroundTextStyle: 'dark',
} as Taro.PageConfig;
