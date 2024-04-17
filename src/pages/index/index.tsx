import { View, WebView, Text } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import React, { useEffect, useRef } from "react";
import { createBEM } from "../../utils/class-utils";
// import { appendSearchParams } from '@/utils/history-utils';
import { appendSearchParams } from "../../utils/history-utils";

// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// import "./index.less";

const bem = createBEM("web-view-page");

export default function WebViewPage(): ReturnType<React.FC> {
  const { url = "" } = useRouter().params;

  const TMap = useRef();
  const handleWebView = () => {
    const params = [
      { position: [30, 114], content: "Marker 1" },
      { position: [30, 115], content: "Marker 1" },
      { position: [30, 116], content: "Marker 1" },
      { position: [30, 117], content: "Marker 1" },
      { position: [30, 118], content: "Marker 1" },
      { position: [30, 119], content: "Marker 1" },
      { position: [30, 120], content: "Marker 1" },
      { position: [30, 121], content: "Marker 1" },
      { position: [30, 122], content: "Marker 1" },
      { position: [30, 123], content: "Marker 1" },
      { position: [41, 124], content: "Marker 2" },
      { position: [42, 124], content: "Marker 2" },
    ];

    Taro.redirectTo({
      url: appendSearchParams("/pages/web-view/index", {
        url: `http://localhost:3000/`,
        queryParams: JSON.stringify(params),
      }),
    });
  };

  useEffect(() => {
    // handleWebView()
  }, []);

  const handleJumpVideo = () => {
    console.log("handleJumpVideo");
    Taro.navigateTo({
      url: "/pages/video/index",
    });
  };

  return (
    <View className={bem()}>
      主页
      <View onClick={handleJumpVideo}>dianji</View>
    </View>
  );
}
