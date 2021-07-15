/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-12 09:45:04
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-15 11:57:48
 */
import { Card, Col, Form, List, Row, Select, Button, Modal , Image} from 'antd';
import React, { useState } from 'react';
import type { FC } from 'react';
import { useRequest } from 'umi';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';
import type { ListItemDataType } from './data.d';
import { queryFakeList } from './service';
import styles from './style.less';
import axios from 'axios';
import Item from 'antd/lib/list/Item';

const { Option } = Select;
const FormItem = Form.Item;

const getKey = (id: string, index: number) => `${id}-${index}`;

const ListSearchProjects: FC = () => {
const [isModalVisible, setIsModalVisible] = useState(false);
const [pictureId, setPictureId] = useState(0);
const [pictureArray, setPictureArray] = useState([]);

const getPictures = (value: any) => {
  axios.get(`/api2/business/album/selectById?id=${value}`)
  .then(function (response) {
    setPictureArray(response.data.data.value.pictures);
  })
  .catch(err => console.log(err))
};

const showModal = (id) => {
  getPictures(id);
  setIsModalVisible(true);
};

const handleOk = () => {
  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};
  // 获取后台数据
  const { data, loading, run } = useRequest((values: any) => {
    console.log('form data', values);
    return queryFakeList({
      count: 8,
    });
  });

  // 渲染数据
  const list = data?.value || [];

  // 相册列表
  const cardList = list && (
    <List<ListItemDataType>
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
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          <Card className={styles.card} hoverable cover={<img alt={item.name} src={item.pictures[0]} />}>
            <Card.Meta
              title={<a>{item.name}</a>}
            />
            <div className={styles.cardItemContent}>
            <Button type="primary" onClick={() => {
              setPictureId(item.id);
              showModal(item.id);
            }}>
              进入相册
            </Button>
              <div className={styles.avatarList}>
              </div>
            </div>
          </Card>
        </List.Item>
      )}
    />
  );

  const formItemLayout = {
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  return (
    <>
    <div className={styles.coverCardList}>
      <Card bordered={false}>
        <Form
          layout="inline"
          onValuesChange={(_, values) => {
            // 表单项变化时请求数据
            // 模拟查询表单生效
            run(values);
          }}
        >
          <StandardFormRow title="所属类目" block style={{ paddingBottom: 11 }}>
            <FormItem name="category">
              <TagSelect expandable>
                <TagSelect.Option value="cat1">类目一</TagSelect.Option>
                <TagSelect.Option value="cat2">类目二</TagSelect.Option>
                <TagSelect.Option value="cat3">类目三</TagSelect.Option>
                <TagSelect.Option value="cat4">类目四</TagSelect.Option>
                <TagSelect.Option value="cat5">类目五</TagSelect.Option>
                <TagSelect.Option value="cat6">类目六</TagSelect.Option>
                <TagSelect.Option value="cat7">类目七</TagSelect.Option>
                <TagSelect.Option value="cat8">类目八</TagSelect.Option>
                <TagSelect.Option value="cat9">类目九</TagSelect.Option>
                <TagSelect.Option value="cat10">类目十</TagSelect.Option>
                <TagSelect.Option value="cat11">类目十一</TagSelect.Option>
                <TagSelect.Option value="cat12">类目十二</TagSelect.Option>
              </TagSelect>
            </FormItem>
          </StandardFormRow>
          <StandardFormRow title="其它选项" grid last>
            <Row gutter={16}>
              <Col lg={8} md={10} sm={10} xs={24}>
                <FormItem {...formItemLayout} label="作者" name="author">
                  <Select placeholder="不限" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="lisa">王昭君</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col lg={8} md={10} sm={10} xs={24}>
                <FormItem {...formItemLayout} label="好评度" name="rate">
                  <Select placeholder="不限" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="good">优秀</Option>
                    <Option value="normal">普通</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
          </StandardFormRow>
        </Form>
      </Card>
      <div className={styles.cardList}>{cardList}</div>
    </div>
    <Modal title="相册详情" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Image.PreviewGroup>
      {pictureArray.map((picture) => <Image src={picture}/>)}
      </Image.PreviewGroup>
    </Modal>
    </>
  );
};

export default ListSearchProjects;
