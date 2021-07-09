import React from 'react';
import Data from './components/data';
import Detail from './components/detail';
import {
  WalletOutlined,
  ShoppingCartOutlined,
  EyeOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { Col, Row } from 'antd';

const MainPage: React.FC = () => {
  const DetailData = [
    {
      tableTitle: '待支付订单',
      number: 0,
    },
    {
      tableTitle: '代发货订单',
      number: 10,
    },
    {
      tableTitle: '待收货订单',
      number: 13,
    },
    {
      tableTitle: '待支付订单',
      number: 26,
    },
    {
      tableTitle: '交易失败',
      number: 30,
    },
  ];
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
        <Col span={6}>
          <Detail title="商品列表" tableData={DetailData} />
        </Col>
      </Row>
    </>
  );
};

export default MainPage;
