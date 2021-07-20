/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-05 10:45:55
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-20 16:30:16
 */
import React from 'react';
import { Button, Tooltip, Tag } from 'antd';
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRequest } from '@/.umi/plugin-request/request';
import { queryRule } from './service';

export type Status = {
  color: string;
  text: string;
};

const statusMap = {
  0: {
    color: 'blue',
    text: '进行中',
  },
  1: {
    color: 'green',
    text: '已完成',
  },
  2: {
    color: 'volcano',
    text: '警告',
  },
  3: {
    color: 'red',
    text: '失败',
  },
  4: {
    color: '',
    text: '未完成',
  },
};

export type TableListItem = {
  id: number; // 订单号
  transportPrice: number; // 运费
  discount: number; // 折扣
  deliveryMode: string; // 模式
  paymentTime: number; // 支付时间
  gmtCreate: number; // 创建时间
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: Status;
  createdAt: number;
};


const tableListDataSource: TableListItem[] = [];

// const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

/*
for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: statusMap[Math.floor(Math.random() * 10) % 5],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
  });
}
*/

const columns: ProColumns<TableListItem>[] = [
  {
    title: '订单号',
    width: 120,
    dataIndex: 'id',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '状态',
    width: 120,
    dataIndex: 'status',
    render: (_, record) => <Tag color={record.status.color}>{record.status.text}</Tag>,
  },
  {
    title: '折扣',
    width: 120,
    dataIndex: 'discount',
    align: 'right',
    sorter: (a, b) => a.discount - b.containers,
  },
  {
    title: '模式',
    width: 120,
    dataIndex: 'deliveryMode',
    align: 'right',
  },
  {
    title: '运费',
    width: 120,
    dataIndex: 'transportPrice',
    align: 'right',
    sorter: (a, b) => a.transportPrice - b.transportPrice,
  },
  {
    title: (
      <>
        创建时间
        <Tooltip placement="top" title="订单创建时间">
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Tooltip>
      </>
    ),
    width: 140,
    key: 'since',
    dataIndex: 'gmtCreate',
    valueType: 'date',
    sorter: (a, b) => a.gmtCreate - b.gmtCreate,
  },
  {
    title: (
      <>
        支付时间
        <Tooltip placement="top" title="用户支付时间">
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Tooltip>
      </>
    ),
    width: 140,
    key: 'since',
    dataIndex: 'paymentTime',
    valueType: 'date',
    sorter: (a, b) => a.paymentTime - b.paymentTime,
  },
  {
    title: '操作',
    width: 164,
    key: 'option',
    valueType: 'option',
    render: () => [
      <a key="1">编辑</a>,
      <a key="2">删除</a>,
    ],
  },
];

const expandedRowRender = () => {
  const data = [];
  for (let i = 0; i < 3; i += 1) {
    data.push({
      key: i,
      date: '2014-12-24 23:12:00',
      name: 'This is production name',
      upgradeNum: 'Upgraded: 56',
    });
  }
  return (
    <ProTable
      columns={[
        { title: '商铺ID', dataIndex: 'storeId', key: 'storeId' },
        { title: '用户ID', dataIndex: 'userId', key: 'userId' },

        { title: '商品ID', dataIndex: 'commodityId', key: 'commodityId' },
        { title: '数量', dataIndex: 'number', key: 'number' },
        { title: '租期', dataIndex: 'rentDays', key: 'rentDays' },
        { title: '状态', dataIndex: 'status', key: 'status' },
        {
          title: 'Action',
          dataIndex: 'operation',
          key: 'operation',
          valueType: 'option',
          render: () => [<a key="Pause">编辑</a>, <a key="Stop">删除</a>],
        },
      ]}
      headerTitle={false}
      search={false}
      options={false}
      dataSource={data}
      pagination={false}
    />
  );
};

export default () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      /*
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      */
      request={
        (params,sorter,filter) => queryRule({ ...params,filter,currentPage}).then(response => {
          const result = {
            data: response.data.value.records.map((item: any,i: any) => {
              return {
                ...item,
                key: i.toString(),
              }
            }),
          }
          return result;
        })
      } 
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      expandable={{ expandedRowRender }}
      search={false}
      dateFormatter="string"
      headerTitle="订单管理"
      options={false}
      toolBarRender={() => [
        <Button key="show">查看日志</Button>,
        <Button key="out">
          导出数据
          <DownOutlined />
        </Button>,
      ]}
    />
  );
};
