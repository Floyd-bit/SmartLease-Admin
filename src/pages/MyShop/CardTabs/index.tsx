/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-15 11:51:54
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-17 16:54:43
 */
import React from "react";
import styles from "./index.less";
import { Button, Card, Form, Input, message, Modal, Result } from "antd";
import axios from 'axios';

const tabListNoTitle = [
  {
    key: "update",
    tab: "更新店铺"
  },
  {
    key: "delete",
    tab: "删除店铺"
  },
];

const onFinish = (values: any) => {
  console.log(values);
  axios.put(`/api2/business/store/update?creditScore=5&id=1&storekeeperId=1&storeName=${values.storeName}&introduction=${values.introduction}`)
  .then(function (response) {
    message.success(response.data.message);
  })
  .catch(err => console.log(err))
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

class TabsCard extends React.Component {

  showModal = () => {
    this.setState({
    isModalVisible: true
    });
  };

  handleOk = () => {
  axios.delete(`http://47.110.156.20:8083/business/store/deleteById?id=1`)
  .then(function (response) {
    message.success(response.data.message);
  })
  .catch(err => console.log(err))
    this.setState({
      isModalVisible: false
      });
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false
      });
  };
  state = {
    key: "update",
    isModalVisible: false
  };  
  onTabChange = (key) => {
    this.setState({ key });
    console.log(this.state.key);
  };

  render() {
    return (
      <>
      <div>
        <br />
        <br />
        <Card
          style={{ width: "100%" }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          onTabChange={key => {
            this.onTabChange(key);
          }}
        >
          <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ storeName: "珞珈大自强" ,introduction: "自强超市"} }
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          hidden={this.state.key === 'delete'}
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


        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
      <Button hidden={this.state.key === 'update'} onClick={this.showModal}>删除</Button>
        </Card>
      </div>
      <Modal  visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
      <Result
        status="warning"
        title="您确定要删除店铺？"
  />
      </Modal>
      </>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-card-demo-tabs">
      <TabsCard />
    </div>
  </div>
);
