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
  return <Column {...config} />;
};

export default orderChart;