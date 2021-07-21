/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-19 09:37:07
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-21 11:54:13
 */
import {  Button, Card, Form, Input, List, Typography, Modal } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useRequest } from 'umi';
import { queryFakeList } from './service';
import type { CardListItemDataType } from './data.d';
import styles from './style.less';
import axios from 'axios';
import { useState } from 'react';

const { Paragraph } = Typography;

const StoreList = () => {
  const { data, loading } = useRequest(() => {
    return queryFakeList({
      count: 8,
    });
  });
  

  const list = data?.value.records || [];
  const content = (
    <div className={styles.pageHeaderContent}>
      <p>
        管理租享宝平台商铺
      </p>

    </div>
  );

  const extraContent = (
    <div className={styles.extraImg}>
      <img
        alt="这是一个标题"
        src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
      />
    </div>
  );
  const nullData: Partial<CardListItemDataType> = {};
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentShop, setCurrentShop] = useState(0);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    onFinish(1);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: any) => {
    // console.log(values);
    axios.put(`/api2/business/store/update?creditScore=5&id=${currentShop}&storekeeperId=1&storeName=${values.storeName}&introduction=${values.introduction}`)
    .then(function (response) {
      message.success(response.data.message);
    })
    .catch(err => console.log(err))
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
    <PageContainer content={content} extraContent={extraContent}>
      <div className={styles.cardList}>
        <List<Partial<CardListItemDataType>>
          rowKey="id"
          loading={loading}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={[nullData, ...list]}
          renderItem={(item) => {
              return (
                <List.Item key={item.id}>
                  <Card
                    hoverable
                    className={styles.card}
                    actions={[<a key="option1" onClick={()=> {setCurrentShop(item.id);showModal();}}>编辑信息</a>, <a key="option2">删除商铺</a>]}
                  >
                    <Card.Meta
                      avatar={<img alt="" className={styles.cardAvatar} src={item.icon} />}
                      title={<a>{item.storeName}</a>}
                      description={
                        <Paragraph className={styles.item} ellipsis={{ rows: 3 }}>
                          {item.introduction}
                        </Paragraph>
                      }
                    />
                  </Card>
                </List.Item>
              );
          }}
        />
      </div>
    </PageContainer>
    <Modal title="修改店铺信息" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
    <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ storeName: "珞珈大自强" ,introduction: "自强超市"} }
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="商铺名称"
            name="storeName"
            rules={[{ required: true, message: '请输入商铺名称!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="简介"
            name="introduction"
            rules={[{ required: true, message: '请输入简介!' }]}
          >
          <Input />
        </Form.Item>

      </Form>
    </Modal>
    </>
  );
};

export default StoreList;
