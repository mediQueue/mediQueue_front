import React, { useEffect } from 'react';
import { css } from '@emotion/react';

export const Map = () => {
  // 네이버 지도 생성
  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(37.511337, 127.012084),
      zoom: 13,
    };
    // 네이버 Map 생성 객체
    const map = new naver.maps.Map('map', mapOptions);

    // 네이버 Clcik Event 생성
    naver.maps.Event.addListener(map, 'click', () => {
      console.log('CLICK!');
    });
  }, []);

  const MapStyle = css`
    width: 500px;
    height: 500px;
  `;

  return (
    <>
      <div id='map' css={MapStyle}></div>
    </>
  );
};
