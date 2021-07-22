/*
 * @Description: 
 * @version: 1.0
 * @Author: 范玉琳
 * @Date: 2021-07-06 10:19:08
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-22 10:12:06
 */

import { FC, useState } from 'react';
import React, { useEffect } from 'react';
import { Button, Card, Col, Form, List, Row, Select, Tag, Image, message, Modal } from 'antd';
import { LoadingOutlined, StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import type { Dispatch } from 'umi';
import { connect } from 'umi';
import ArticleListContent from './components/ArticleListContent';
import type { StateType } from './model';
import type { ListItemDataType } from './data.d';
import StandardFormRow from './components/StandardFormRow';
import styles from './style.less';
import axios from 'axios';
import TextArea from 'antd/lib/input/TextArea';

const { Option } = Select;
const FormItem = Form.Item;

const pageSize = 5;

type CommentsListProps = {
  dispatch: Dispatch;
  commentsList: StateType;
  loading: boolean;
};
const CommentsList: FC<CommentsListProps> = ({
  dispatch,
  commentsList: { list },
  loading,
}) => {
  const [refresh,setRefresh] = useState(0);
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    message.success("回复成功");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  // 回复框变化
  const onChange = e => {
    console.log('Change:', e.target.value);
  };

  useEffect(() => {
    dispatch({
      type: 'commentsList/fetch',
      payload: {
        size: 5,
      },
    });
  }, [refresh]);
  const setOwner = () => {
    form.setFieldsValue({
      owner: ['wzj'],
    });
  };

  const fetchMore = () => {
    dispatch({
      type: 'commentsList/appendFetch',
      payload: {
        size: pageSize,
      },
    });
  };

  const owners = [
    {
      id: 'wzj',
      name: '我自己',
    },
    {
      id: 'wjh',
      name: '吴家豪',
    },
    {
      id: 'zxx',
      name: '周星星',
    },
    {
      id: 'zly',
      name: '赵丽颖',
    },
    {
      id: 'ym',
      name: '姚明',
    },
  ];

  const IconText: React.FC<{
    type: string;
    text: React.ReactNode;
  }> = ({ type, text }) => {
    switch (type) {
      case 'star-o':
        return (
          <span>
            <StarOutlined style={{ marginRight: 8 }} />
            {text}
          </span>
        );
      case 'like-o':
        return (
          <span>
            <LikeOutlined style={{ marginRight: 8 }} />
            {text}
          </span>
        );
      case 'message':
        return (
          <span>
            <MessageOutlined style={{ marginRight: 8 }} />
            {text}
          </span>
        );
      default:
        return null;
    }
  };

  const formItemLayout = {
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 12 },
    },
  };

  // 删除评论
const  handleRemove = async (id: any) => {
  axios.delete(`/api2/business/evaluation/deleteById?id=${id}`)
  .then(function (response) {
      if(response.data.message === "删除成功"){
        message.success("删除成功");
        setRefresh(refresh+1);
      }
      else{
        message.error("删除失败");
      }
  })
  .catch(err => console.log(err))
}

  // 加载更多
  const loadMore = list.length > 0 && (
    <div style={{ textAlign: 'center', marginTop: 16 }}>
      <Button onClick={fetchMore} style={{ paddingLeft: 48, paddingRight: 48 }}>
        {loading ? (
          <span>
            <LoadingOutlined /> 加载中...
          </span>
        ) : (
          '加载更多'
        )}
      </Button>
    </div>
  );

  return (
    <>
      <Card bordered={false}>
        <Form
          layout="inline"
          form={form}
          initialValues={{
            owner: ['wjh', 'zxx'],
          }}
          onValuesChange={() => {
            dispatch({
              type: 'commentsList/fetch',
              payload: {
                count: 8,
              },
            });
          }}
        >
          <StandardFormRow title="选项" grid last>
            <Row gutter={16}>
              <Col xl={8} lg={10} md={12} sm={24} xs={24}>
                <FormItem {...formItemLayout} label="活跃用户" name="user">
                  <Select placeholder="不限" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="lisa">测试用户</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col xl={8} lg={10} md={12} sm={24} xs={24}>
                <FormItem {...formItemLayout} label="好评度" name="rate">
                  <Select placeholder="不限" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="good">优秀</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
          </StandardFormRow>
        </Form>
      </Card>
      <Card
        style={{ marginTop: 24 }}
        bordered={false}
        bodyStyle={{ padding: '8px 32px 32px 32px' }}
      >
        <List<ListItemDataType>
          size="large"
          loading={list.length === 0 ? loading : false}
          rowKey="id"
          itemLayout="vertical"
          loadMore={loadMore}
          dataSource={list}
          renderItem={(item) => (
            <Row align="middle">
              <Col span={16}>
            <List.Item
              key={item.id}
              actions={[
                <IconText key="star" type="star-o" text={item.star} />,
                <IconText key="like" type="like-o" text={item.score} />,
                <IconText key="message" type="message" text={item.message} />,
              ]}
              extra={<div className={styles.listItemExtra} />}
            >
              <List.Item.Meta
                title={
                  <a className={styles.listItemMetaTitle} href={item.href}>
                    {item.commodityName}
                  </a>
                }
                description={
                  <>
                  <span>
                    <Tag>评论</Tag>
                    <Tag>{item.commodityName}</Tag>
                  </span>
                  
                  </>
                }
              />   
              <Image src={item.pictures[0]} height={150} width={150}/> 
              <ArticleListContent data={item} />
            </List.Item>   
          </Col>   
          <Col span={2}>
            <Button onClick={showModal}>回复</Button>
          </Col>
          <Col span={2}>
            <Button danger onClick={async () => {await handleRemove(item.id)}}>删除</Button>
          </Col>
            </Row>
          )}
        />
      </Card>
      <Modal title="回复评价" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <TextArea showCount maxLength={100} onChange={onChange} />
      </Modal>
    </>
  );
};

export default connect(
  ({
    commentsList,
    loading,
  }: {
    commentsList: StateType;
    loading: { models: Record<string, boolean> };
  }) => ({
    commentsList,
    loading: loading.models.commentsList,
  }),
)(CommentsList);
