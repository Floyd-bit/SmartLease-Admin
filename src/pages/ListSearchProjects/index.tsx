/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-12 09:45:04
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-21 11:23:15
 */
import { Card, Col, Form, List, Row, Select, Button, Modal , Image, Upload, message} from 'antd';
import React, { useState } from 'react';
import type { FC } from 'react';
import { useRequest } from 'umi';
import StandardFormRow from './components/StandardFormRow';
import type { ListItemDataType } from './data.d';
import { queryFakeList } from './service';
import styles from './style.less';
import axios from 'axios';
import Item from 'antd/lib/list/Item';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;
const FormItem = Form.Item;

const getKey = (id: string, index: number) => `${id}-${index}`;

const ListSearchProjects: FC = () => {
const [isModalVisible, setIsModalVisible] = useState(false);
const [pictureId, setPictureId] = useState(0);
const [pictureArray, setPictureArray] = useState([]);
const [currentAlbum, seCurrentAlbum] = useState(0);

const getPictures = (value: any) => {
  axios.get(`/api2/business/album/selectById?id=${value}`)
  .then(function (response) {
    setPictureArray(response.data.data.value.pictures);
  })
  .catch(err => console.log(err))
};

const showModal = (id: number) => {
  getPictures(id);
  setIsModalVisible(true);
};

const handleOk = () => {
  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};

const handleAdd = () => {
  axios.get(`/api2/business/album/addPicture?id=${currentAlbum}&picture=https://file-gateway.52rental.com/file-gateway/stable/6068251e1c5b471396081a99798a5601.png`)
  .then(function (response) {
    // setPictureArray(response.data.data.value.pictures);
    getPictures(currentAlbum);
    message.success('添加成功');
  })
  .catch(err => console.log(err))
};

const handleRemove = (id: any) => {
  /*
  axios.get(`/api2/business/album/deletePicture?id=${currentAlbum}&pictureOrder=1`)
  .then(function (response) {
    // setPictureArray(response.data.data.value.pictures);
    message.success('删除成功');
    window.location.reload();
  })
  .catch(err => message.error(err))
  */
 setIsModalVisible(false);
 message.success("删除成功");
}

  // 获取后台数据
  const { data, loading, run } = useRequest((values: any) => {
    console.log('form data', values);
    return queryFakeList({
      count: 8,
    });
  });

  // 渲染数据
  const list = data?.value || [];

  // 上传按钮
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info: { file: { status: string; name: any; }; fileList: any; }) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

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
              seCurrentAlbum(item.id);
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

  const createData = {
    "id": 0,
    "name": "相册7",
    "pictures": ["https://img1.baidu.com/it/u=3621261794,1522031796&fm=26&fmt=auto&gp=0.jpg"],
    "storeId": "1"
  }

  const addAlbum = () => {
    axios.post(`/api2/business/album/create`,createData)
    .then(function (response) {
      // setPictureArray(response.data.data.value.pictures);
      message.success('添加成功');
      window.location.reload();
    })
    .catch(err => message.error(err))
  }

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
          <StandardFormRow title="选项" grid last>
            <Row gutter={16}>
              <Col lg={8} md={10} sm={10} xs={24}>
                <FormItem {...formItemLayout} label="相册名称" name="author">
                  <Select placeholder="不限" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="lisa">相册1</Option>
                    <Option value="lisa">相册2</Option>
                    <Option value="lisa">相册3</Option>
                    <Option value="lisa">相册4</Option>
                    <Option value="lisa">相册5</Option>
                    <Option value="lisa">相册6</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col lg={8} md={10} sm={10} xs={24}>
                <FormItem {...formItemLayout} label="添加相册" name="rate">
                  <Button type="primary" onClick={addAlbum}>添加</Button>
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
      {pictureArray.map((picture) => 
      <Row align="middle">
        <Image src={picture} width={400} height={300}/>
        <Button danger onClick={handleRemove} size="small" style={{marginLeft: 20}}>删除</Button>
      </Row>
      )}
    <Upload {...props}>
      <Button icon={<UploadOutlined />} onClick={handleAdd}>上传图片</Button>
    </Upload>
      </Image.PreviewGroup>
    </Modal>
    </>
  );
};

export default ListSearchProjects;
