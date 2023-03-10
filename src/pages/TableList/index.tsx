/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-05 10:45:55
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-23 18:49:50
 */
import React,{useState} from 'react';
import { Button, Tooltip, Tag, message, Modal, Select } from 'antd';
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { queryRule } from './service';
import axios from 'axios';

const { Option } = Select;

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
  status: string;
  createdAt: number;
  uniform: string;
  rentPrice: number;
  orderStatus: string;
};

export type statusType = {
  id: number; // 订单号
  status: number; // 改变状态
}

// const tableListDataSource: TableListItem[] = [];

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


const handleRemove = () => {
  message.success('删除成功');
}

export default () => {
  const [data,setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentId,setCurrentId] = useState(0);
  const [status,setStauts] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    let statusNum;
    switch(status){
      case '待付款': 
      statusNum=1;
      break;
      case '待发货': 
      statusNum=2;
      break;
      case '待收货': 
      statusNum=3;
      break;
      case '使用中': 
      statusNum=4;
      break;
      case '未退还': 
      statusNum=5;
      break;
      case '已归还': 
        statusNum=7;
        break;
      default: statusNum =1;
    }
    
    axios.put(`/api6/release/edit-order-status?id=${currentId}&status=${statusNum}`)
    .then((res) => {
      message.success(res.data);
      window.location.reload();
    })
    
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
      // render: (_, record) => <Tag color={record.status.color}>{record.status.text}</Tag>,
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
      title: '总价',
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
      dataIndex: 'gmtUpdate',
      valueType: 'date',
    },
    {
      title: '操作',
      width: 164,
      key: 'option',
      valueType: 'option',
      render: (_,record) => [
        <a key="1" onClick={()=>{showModal();setCurrentId(record.id);}}>改变订单状态</a>,
        <a key="2" onClick={handleRemove}>删除</a>,
      ],
    },
  ];

  const expandedRow = (record: any) => {
    let url = "/api1/customer/orderItem/getByIds?";
    // console.log(record.orderItems);
    record.orderItemIds.forEach((item: any)=>{url += `ids=${item}&`});
    // function getData(){
      axios.get(url)
      .then(function (response) {
        // console.log("response.data.data.value",response.data.data.value)
        setData(response.data.data.value);
        // console.log("data",data)
        
      })
      .catch(err => message.error(err))
    // }
    // record.orderItemIds
    // getData();
    // console.log(data);
    return (
      <ProTable
        columns={[
          { title: '商铺ID', dataIndex: 'storeId', key: 'storeId' },
          { title: '商品ID', dataIndex: 'commodityId', key: 'commodityId' },
          { title: '数量', dataIndex: 'number', key: 'number' },
          { title: '租金', dataIndex: 'payment', key: 'payment' },
          { title: '状态', dataIndex: 'status', key: 'status' },
          { title: '总价', dataIndex: 'transportPrice', key: 'transportPrice' },
          { title: '租期', dataIndex: 'rentDays', key: 'rentDays' },
        ]}
        headerTitle={false}
        search={false}
        options={false}
        dataSource={data}
        pagination={false}
      />
    );
  };
  
  return (
    <>
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
        (params) => queryRule({ ...params}).then(response => {
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
      // expandable={{ expandedRowRender }}
      expandable={{expandedRowRender: record => expandedRow(record)}}
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
    <Modal title="改变订单状态" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
    <Select defaultValue="未支付" style={{ width: 240 }} onChange={(value)=>{setStauts(value)}}>
      <Option value="UNPAY">待付款</Option>
      <Option value="UNSEND">待发货</Option>
      <Option value="UNRECEIVE">待收货</Option>
      <Option value="AFTERSALE">售后中</Option>
      <Option value="USING">使用中</Option>
      <Option value="HAVEBACK">已归还</Option>
    </Select>
  </Modal>
  </>
  );
};
