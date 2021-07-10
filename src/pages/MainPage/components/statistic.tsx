import React from 'react';
import { Line } from '@ant-design/charts';

type StatisticTableItem = {
  Date: string; // 示例：2010-01
  income: number;
};
interface StatisticProps {
  title: string;
  data: StatisticTableItem[];
}
const Statistic: React.FC<StatisticProps> = (props) => {
  const config = {
    data: props.data,
    padding: 'auto',
    xField: 'Date',
    yField: 'income',
    xAxis: { tickCount: 5 },
    height: 180,
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '250px',
        width: '600px',
        marginTop: '50px',
        boxShadow: '2px 2px 10px #888888',
      }}
    >
      <div style={{ margin: '10px', fontSize: '17px' }}>{props.title}</div>
      <div style={{ padding: '10px' }}>
        <Line {...config} />
      </div>
    </div>
  );
};

export default Statistic;
