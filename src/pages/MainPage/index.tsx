import React from 'react';
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

const MainPage: React.FC = () => {
  const StatisticTableData = [
    {
      Date: '2010-01',
      income: 1998,
    },
    {
      Date: '2010-02',
      income: 1850,
    },
    {
      Date: '2010-03',
      income: 1720,
    },
    {
      Date: '2010-04',
      income: 1818,
    },
    {
      Date: '2010-05',
      income: 1920,
    },
    {
      Date: '2010-06',
      income: 1802,
    },
    {
      Date: '2010-07',
      income: 1945,
    },
    {
      Date: '2010-08',
      income: 1856,
    },
    {
      Date: '2010-09',
      income: 2107,
    },
    {
      Date: '2010-10',
      income: 2140,
    },
    {
      Date: '2010-11',
      income: 2311,
    },
    {
      Date: '2010-12',
      income: 1972,
    },
    {
      Date: '2011-01',
      income: 1760,
    },
    {
      Date: '2011-02',
      income: 1824,
    },
    {
      Date: '2011-03',
      income: 1801,
    },
    {
      Date: '2011-04',
      income: 2001,
    },
    {
      Date: '2011-05',
      income: 1640,
    },
    {
      Date: '2011-06',
      income: 1502,
    },
    {
      Date: '2011-07',
      income: 1621,
    },
    {
      Date: '2011-08',
      income: 1480,
    },
    {
      Date: '2011-09',
      income: 1549,
    },
    {
      Date: '2011-10',
      income: 1390,
    },
    {
      Date: '2011-11',
      income: 1325,
    },
    {
      Date: '2011-12',
      income: 1250,
    },
    {
      Date: '2012-01',
      income: 1394,
    },
    {
      Date: '2012-02',
      income: 1406,
    },
    {
      Date: '2012-03',
      income: 1578,
    },
    {
      Date: '2012-04',
      income: 1465,
    },
  ];
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
        <Col span={12}>
          <Detail title="商品列表" tableData={DetailData} />
        </Col>
        <Col span={12}>
          <Statistic data={StatisticTableData} title="订单统计" />
        </Col>
        <Col span={12}>
          <Detail title="商品列表" tableData={DetailData} />
        </Col>
        <Col span={12}>
          <Statistic data={StatisticTableData} title="订单统计" />
        </Col>
      </Row>
    </>
  );
};

export default MainPage;
