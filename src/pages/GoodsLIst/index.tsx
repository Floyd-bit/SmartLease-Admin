import type { FC } from 'react';
import React, { useRef, useState, useEffect } from 'react';
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Dropdown,
  Input,
  List,
  Menu,
  Modal,
  Radio,
  Row,
} from 'antd';

import { findDOMNode } from 'react-dom';
import { PageContainer } from '@ant-design/pro-layout';
import type { Dispatch } from 'umi';
import { connect } from 'umi';
import moment from 'moment';
import OperationModal from './components/OperationModal';
import type { StateType } from './model';
import type { BasicListItemDataType } from './data.d';
import styles from './style.less';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Search } = Input;

type GoodsLIstProps = {
  goodsLIst: StateType;
  dispatch: Dispatch;
  loading: boolean;
};

const Info: FC<{
  title: React.ReactNode;
  value: React.ReactNode;
  bordered?: boolean;
}> = ({ title, value, bordered }) => (
  <div className={styles.headerInfo}>
    <span>{title}</span>
    <p>{value}</p>
    {bordered && <em />}
  </div>
);

const ListContent = ({
  data: { orderItemId, createTime, payment },
}: {
  data: BasicListItemDataType;
}) => (
  <div className={styles.listContent}>
    <div className={styles.listContentItem}>
      <span>订单号</span>
      <p>{orderItemId}</p>
    </div>
    <div className={styles.listContentItem}>
      <span>开始时间</span>
      <p>{moment(createTime).format('YYYY-MM-DD HH:mm')}</p>
    </div>
    <div className={styles.listContentItem}>
    <span>支付金额</span>
      <p>{payment}￥</p>
    </div>
  </div>
);

export const GoodsLIst: FC<GoodsLIstProps> = (props) => {
  const addBtn = useRef(null);
  const {
    loading,
    dispatch,
    goodsLIst: { list },
  } = props;
  const [done, setDone] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<BasicListItemDataType> | undefined>(undefined);
  const [isSolve, setIsSolve] = useState<boolean>(false);

  useEffect(() => {
    dispatch({
      type: 'goodsLIst/fetch',
      payload: {
        count: 5,
        isSolve
      },
    });
  }, [isSolve]);

  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 5,
    total: 50,
  };

  const showModal = () => {
    setVisible(true);
    setCurrent(undefined);
  };

  const showEditModal = (item: BasicListItemDataType) => {
    setVisible(true);
    setCurrent(item);
  };

  const deleteItem = (id: string) => {
    dispatch({
      type: 'goodsLIst/submit',
      payload: { id },
    });
  };

  const editAndDelete = (key: string | number, currentItem: BasicListItemDataType) => {
    if (key === 'edit') showEditModal(currentItem);
    else if (key === 'delete') {
      Modal.confirm({
        title: '删除任务',
        content: '确定删除该任务吗？',
        okText: '确认',
        cancelText: '取消',
        onOk: () => deleteItem(currentItem.id),
      });
    }
  };

  const extraContent = (
    <div className={styles.extraContent}>
      <RadioGroup defaultValue="progress">
        <RadioButton value="progress" onClick={()=>{setIsSolve(false)}}>未处理</RadioButton>
        <RadioButton value="waiting" onClick={()=>{setIsSolve(true)}}>已处理</RadioButton>
      </RadioGroup>
      <Search className={styles.extraContentSearch} placeholder="请输入" onSearch={() => ({})} />
    </div>
  );

  const MoreBtn: React.FC<{
    item: BasicListItemDataType;
  }> = ({ item }) => (
    <Dropdown
      overlay={
        <Menu onClick={({ key }) => editAndDelete(key, item)}>
          <Menu.Item key="edit">编辑</Menu.Item>
          <Menu.Item key="delete">删除</Menu.Item>
        </Menu>
      }
    >
      <a>
        更多 <DownOutlined />
      </a>
    </Dropdown>
  );

  const setAddBtnblur = () => {
    if (addBtn.current) {
      // eslint-disable-next-line react/no-find-dom-node
      const addBtnDom = findDOMNode(addBtn.current) as HTMLButtonElement;
      setTimeout(() => addBtnDom.blur(), 0);
    }
  };

  const handleDone = () => {
    setAddBtnblur();

    setDone(false);
    setVisible(false);
  };

  const handleCancel = () => {
    setAddBtnblur();
    setVisible(false);
  };

  const handleSubmit = (values: BasicListItemDataType) => {
    setAddBtnblur();

    setDone(true);
    dispatch({
      type: 'goodsLIst/submit',
      payload: values,
    });
  };

  return (
    <div>
      <PageContainer>
        <div className={styles.standardList}>
          <Card bordered={false}>
            <Row>
              <Col sm={8} xs={24}>
                <Info title="待处理" value="8个任务" bordered />
              </Col>
              <Col sm={8} xs={24}>
                <Info title="本周售后处理时间" value="32分钟" bordered />
              </Col>
              <Col sm={8} xs={24}>
                <Info title="本周完成任务数" value="24个任务" />
              </Col>
            </Row>
          </Card>

          <Card
            className={styles.listCard}
            bordered={false}
            title="售后列表"
            style={{ marginTop: 24 }}
            bodyStyle={{ padding: '0 32px 40px 32px' }}
            extra={extraContent}
          >
            <Button
              type="dashed"
              style={{ width: '100%', marginBottom: 8 }}
              onClick={showModal}
              ref={addBtn}
            >
              <PlusOutlined />
              添加
            </Button>

            <List
              size="large"
              rowKey="id"
              loading={loading}
              pagination={paginationProps}
              dataSource={list}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <a
                      key="edit"
                      onClick={(e) => {
                        e.preventDefault();
                        showEditModal(item);
                      }}
                    >
                      编辑
                    </a>,
                    <MoreBtn key="more" item={item} />,
                  ]}
                >
                  <List.Item.Meta
                    title={<a href={item.href}>{item.customerNickName}</a>}
                    description={item.problemDescription}
                  />
                  <ListContent data={item} />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </PageContainer>

      <OperationModal
        done={done}
        current={current}
        visible={visible}
        onDone={handleDone}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default connect(
  ({
    goodsLIst,
    loading,
  }: {
    goodsLIst: StateType;
    loading: {
      models: Record<string, boolean>;
    };
  }) => ({
    goodsLIst,
    loading: loading.models.goodsLIst,
  }),
)(GoodsLIst);
