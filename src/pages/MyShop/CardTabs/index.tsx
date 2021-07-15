/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-15 11:51:54
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-15 16:21:49
 */
import React from "react";
import styles from "./index.less";
import { Button, Card, Form, Input } from "antd";


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
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

class TabsCard extends React.Component {
  state = {
    key: "tab1",
    noTitleKey: "update"
  };  
  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <Card
          style={{ width: "100%" }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          tabBarExtraContent={<a href="#">More</a>}
          onTabChange={key => {
            this.onTabChange(key, "noTitleKey");
          }}
        >
      <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ storeName: "珞珈超市" ,introduction: "string"} }
    
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


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
        </Card>
      </div>
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
