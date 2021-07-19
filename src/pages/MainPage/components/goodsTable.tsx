/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-13 11:42:15
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-19 10:58:12
 */
import { Table, Tag, Space } from 'antd';
import React from 'react';

const columns = [
  {
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '商品信息',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '交易量',
    dataIndex: 'age',
    key: 'age',
  }
];

const data = [
  {
    id: 1,
    key: '1',
    name: '戴尔Dell 3420 14英寸笔记本电脑租赁',
    age: 55,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    id: 2,
    key: '2',
    name: 'ThinkPad E14 14英寸笔记本电脑租赁',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    id: 3,
    key: '3',
    name: '联想Lenovo E97 台式机电脑租赁',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    id: 4,
    key: '4',
    name: '新款骁龙865手机5G全网通大屏智能安卓',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    id: 5,
    key: '5',
    name: '2021新款512G内存',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const GoodsTable: React.FC = (props) => {
    return (
      <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '50px',
        boxShadow: '2px 2px 10px #888888',
      }}
    >
      <div style={{ margin: '10px', fontSize: '17px' }}>单品热度排名</div>
      <div style={{ padding: '10px' }}>
        <Table columns={columns} dataSource={data} pagination={false}/>
      </div>
    </div>
        
    )
}

export default GoodsTable;