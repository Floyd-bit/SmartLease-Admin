/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-05 10:45:55
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-19 13:23:26
 */
import React from 'react';
import { Button, Tooltip, Tag } from 'antd';
import { DownOutlined, QuestionCircleOutlined, EllipsisOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

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
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: Status;
  createdAt: number;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

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

const columns: ProColumns<TableListItem>[] = [
  {
    title: '订单号',
    width: 120,
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '状态',
    width: 120,
    dataIndex: 'status',
    render: (_, record) => <Tag color={record.status.color}>{record.status.text}</Tag>,
  },
  {
    title: '实付款',
    width: 120,
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '折扣',
    width: 120,
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '保证金',
    width: 120,
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '租金',
    width: 120,
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '运费',
    width: 120,
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: (
      <>
        创建时间
        <Tooltip placement="top" title="这是一段描述">
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Tooltip>
      </>
    ),
    width: 140,
    key: 'since',
    dataIndex: 'createdAt',
    valueType: 'date',
    sorter: (a, b) => a.createdAt - b.createdAt,
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
    dataIndex: 'createdAt',
    valueType: 'date',
    sorter: (a, b) => a.createdAt - b.createdAt,
  },
  {
    title: '操作',
    width: 164,
    key: 'option',
    valueType: 'option',
    render: () => [
      <a key="1">链路</a>,
      <a key="2">报警</a>,
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
        { title: '商铺ID', dataIndex: 'date', key: 'date' },
        { title: '用户ID', dataIndex: 'name', key: 'name' },

        { title: '商品ID', dataIndex: 'upgradeNum', key: 'upgradeNum' },
        { title: '数量', dataIndex: 'upgradeNum', key: 'upgradeNum' },
        { title: '租期', dataIndex: 'upgradeNum', key: 'upgradeNum' },
        { title: '状态', dataIndex: 'upgradeNum', key: 'upgradeNum' },
        {
          title: 'Action',
          dataIndex: 'operation',
          key: 'operation',
          valueType: 'option',
          render: () => [<a key="Pause">Pause</a>, <a key="Stop">Stop</a>],
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
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
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
