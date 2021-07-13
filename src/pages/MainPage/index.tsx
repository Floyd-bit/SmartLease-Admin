import React, { useEffect, useState } from 'react';
import Data from './components/data';
import Detail from './components/detail';
import Statistic from './components/statistic';
import {
  WalletOutlined,
  ShoppingCartOutlined,
  EyeOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { Col, Row } from 'antd';
import { getItemData, getOrderChart, getOrderData, getSalesChart } from './service';

const MainPage: React.FC = () => {
  const [orderData, setOrderData] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [orderChart, setOrderChart] = useState([]);
  const [salesChart, setSalesChart] = useState([]);
  const [isInit, setIsInit] = useState(true);
  if (isInit) setIsInit(false);
  useEffect(() => {
    getOrderData().then((res) => setOrderData(res.data));
    getItemData().then((res) => setItemData(res.data));
    getOrderChart().then((res) => setOrderChart(res.data));
    getSalesChart().then((res) => setSalesChart(res.data));
  }, [isInit]);

  return (
    <>
      <Row>
        <Col span={6}>
          <Data number="$23422" description="今日销售总额" icon={<WalletOutlined />} />
        </Col>
        <Col span={6}>
          <Data
            number="452212"
            description="今日订单量"
            icon={<ShoppingCartOutlined />}
            color="#FFC538"
          />
        </Col>
        <Col span={6}>
          <Data
            number="4522"
            description="关注人数（个）"
            icon={<UserAddOutlined />}
            color="#FD4C4E"
          />
        </Col>
        <Col span={6}>
          <Data number="5683" description="今日访问量" icon={<EyeOutlined />} color="#42A7FF" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Detail title="订单情况" tableData={orderData} />
        </Col>
        <Col span={12}>
          <Statistic data={orderChart} title="订单统计" />
        </Col>
        <Col span={12}>
          <Detail title="商品情况" tableData={itemData} />
        </Col>
        <Col span={12}>
          <Statistic data={salesChart} title="销售统计" />
        </Col>
      </Row>
    </>
  );
};

export default MainPage;
