/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-14 09:47:15
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-15 16:21:31
 */
import React, {useState, useEffect} from 'react';
import { Row , Col } from 'antd';
import CardBasic from './CardBasic';
import CarouselAutoplay from './CarouselAutoplay';
import CardTabs from './CardTabs';
import axios from 'axios';

export type storeDetail = {
  id: number,
  storeName: string,
  storekeeperId: number,
  score: number,
  creditScore: number,
  introduction: string
}

function MyShop() {
  const value: storeDetail = {}
  const [storeInformation, setStoreInformation] = useState(value);

  useEffect(() => {
    axios.get(`/api2/business/store/selectByKeeperId?storekeeperId=1`)
    .then(function (response) {
      console.log(response.data.data.value);
      setStoreInformation(response.data.data.value);
    })
    .catch(err => console.log(err))
  },[]);

  return (
    <Row justify="space-around"> 
      <Col span={10}>
        <CardBasic 
        id={storeInformation.id}
        storeName={storeInformation.storeName} 
        introduction={storeInformation.introduction} 
        storekeeperId={storeInformation.storekeeperId}
        creditScore={storeInformation.creditScore}
        score={storeInformation.score}
        />
      </Col>
      <Col span={14}>
        <CarouselAutoplay />
        <CardTabs />
      </Col>
    </Row>
  );
}

export default MyShop;
