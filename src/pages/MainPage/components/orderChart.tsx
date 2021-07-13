/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-13 11:01:37
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-13 14:04:36
 */
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

type orderColumnData = {
    name: string,
    月份: string,
    月均降雨量: number,
};

interface OrderProps {
    data: orderColumnData[];
  }

const orderChart: React.FC<OrderProps> = (props) => {

  const config = {
    data: props.data,
    isGroup: true,
    xField: '月份',
    yField: '交易量',
    seriesField: 'name',
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
  };
  return(
    <>
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      marginTop: '50px',
      boxShadow: '2px 2px 10px #888888',
    }}
  >
    <div style={{ margin: '10px', fontSize: '17px' }}>月购买订单交易记录</div>
    <div style={{ padding: '10px' }}>
      <Column {...config} />;
    </div>
  </div>

</>
)};

export default orderChart;