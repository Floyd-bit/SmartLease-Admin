/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-06 11:20:47
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-22 11:05:43
 */
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Input, Drawer ,Tabs} from 'antd';
import React, { useState, useRef } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import type { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';
import ProDescriptions from '@ant-design/pro-descriptions';
import type { FormValueType } from './components/UpdateForm';
import UpdateForm from './components/UpdateForm';
import type { TableListItem } from './data';
import { queryRule, updateRule, addRule, removeRule, removeSingleRule } from './service';

const { TabPane } = Tabs;
/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
const handleAdd = async (fields: TableListItem) => {
  const hide = message.loading('Adding');
  try {
    await addRule({ ...fields });
    hide();
    message.success('Added successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Adding failed, please try again!');
    return false;
  }
};

/**
 * @en-US Update node
 * @zh-CN 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: FormValueType) => {
  const hide = message.loading('Configuring');
  try {
    await updateRule({
      id: fields.id,
    });
    hide();

    message.success('Configuration is successful');
    return true;
  } catch (error) {
    hide();
    message.error('Configuration failed, please try again!');
    return false;
  }
};

/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: TableListItem[]) => {
  const hide = message.loading('Deleting');
  if (!selectedRows) return true;
  // console.log(selectedRows.map((row) => row.key));
  try {
    await removeRule({
      key: selectedRows.map((row) => row.id),
    });
    console.log("selectedRows",selectedRows.map((row) => row.id));
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};


const handleSingleRemove = async (currentRowId: any) => {
  const hide = message.loading('正在删除');
  if(!currentRowId) return true;
  try {
    await removeSingleRule(currentRowId);
    hide();
    message.success("删除成功");
    return true;
  } catch(error) {
    hide();
    message.error('删除失败');
    return false;
  }
}

function callback(key) {
  console.log(key);
}

const GoodsTypeList: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);

  const [showDetail, setShowDetail] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<TableListItem>();
  const [selectedRowsState, setSelectedRows] = useState<TableListItem[]>([]);
  const [currentPage,setCurrentPage] = useState(1);
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  const changePage = (page: any) => {
    setCurrentPage(page);
    // console.log(page);
    actionRef.current.reload();
  }

  const columns: ProColumns<TableListItem>[] = [
    // 商品编号
    {
      title: <FormattedMessage id="pages.searchTable.no" defaultMessage="Description" />,
      dataIndex: 'id',
      valueType: 'textarea',
      hideInSearch: true,
    },
    {
      dataIndex: 'subImages',
      valueType: 'avatar',
      hideInSearch: true,
    },
    // 商品名称
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.nameLabel"
          defaultMessage="Rule name"
        />
      ),
      dataIndex: 'commodityName',
      tip: 'The rule name is the unique key',
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    // 交易量
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.titleCallNo"
          defaultMessage="Number of service calls"
        />
      ),
      dataIndex: 'tradeNumber',
      sorter: true,
      hideInForm: true,
      hideInSearch: true,
      renderText: (val: string) =>
        `${val}${intl.formatMessage({
          id: 'pages.searchTable.tenThousand',
          defaultMessage: '',
        })}`,
    },
    // 价格/运费
    {
      title: <FormattedMessage id="pages.searchTable.titleDesc" defaultMessage="Description" />,
      dataIndex: 'desc',
      valueType: 'textarea',
      hideInSearch: true,
    },
    // 是否上架
    {
      title: <FormattedMessage id="pages.searchTable.titleStatus" defaultMessage="Status" />,
      dataIndex: 'commodityStatus',
      hideInForm: true,
      hideInSearch: true,
      valueEnum: {
        'ONSALE': {
          text: (
            <FormattedMessage
              id="pages.searchTable.nameStatus.default"
              defaultMessage="Shut down"
            />
          ),
          status: 'Default',
        },
        'y': {
          text: (
            <FormattedMessage id="pages.searchTable.nameStatus.running" defaultMessage="Running" />
          ),
          status: 'Processing',
        },
        'x': {
          text: (
            <FormattedMessage id="pages.searchTable.nameStatus.online" defaultMessage="Online" />
          ),
          status: 'Success',
        },
        'OFFSALE': {
          text: (
            <FormattedMessage
              id="pages.searchTable.nameStatus.abnormal"
              defaultMessage="Abnormal"
            />
          ),
          status: 'Error',
        },
      },
    },
    // 库存
    {
      title: <FormattedMessage id="pages.searchTable.amount" defaultMessage="Description" />,
      dataIndex: 'number',
      valueType: 'textarea',
      hideInSearch: true,
    },
    // 加入时间
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.titleUpdatedAt"
          defaultMessage="Last scheduled time"
        />
      ),
      sorter: true,
      dataIndex: 'releaseTime',
      valueType: 'dateTime',
      hideInSearch: true,
      renderFormItem: (item, { defaultRender, ...rest }, form) => {
        const status = form.getFieldValue('status');
        if (`${status}` === '0') {
          return false;
        }
        if (`${status}` === '3') {
          return (
            <Input
              {...rest}
              placeholder={intl.formatMessage({
                id: 'pages.searchTable.exception',
                defaultMessage: 'Please enter the reason for the exception!',
              })}
            />
          );
        }
        return defaultRender(item);
      },
    },
    // 押金 （元）
    {
      title: <FormattedMessage id="pages.searchTable.money" defaultMessage="Description" />,
      dataIndex: 'guaranteePrice',
      valueType: 'textarea',
      hideInSearch: true,
    },
    // 操作
    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      hideInSearch: true,
      render: (_, record) => [
        // 编辑
        <Button type="primary" icon={<EditOutlined/>} onClick={() => {
          handleUpdateModalVisible(true);
          setCurrentRow(record);
        }}></Button>,
        // 删除     
        <Button type="primary" danger icon={<DeleteOutlined/>} onClick={
          async () => {
            // setSelectedRows([record]);
            // console.log(record.id);
            await handleSingleRemove(record.id);
            // setSelectedRows([]);
            actionRef.current.reload();
          }}>          
        </Button>
      ],
    },
  ];

  return (
    <PageContainer>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="商品列表" key="1">
          </TabPane>
          <TabPane tab="上架商品" key="2">
          </TabPane>
          <TabPane tab="下架商品" key="3">
          </TabPane>
          <TabPane tab="商品回收站" key="4">
          </TabPane>
        </Tabs>
      <ProTable<TableListItem>
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        pagination={{  
          current: currentPage,
          total: 200,
          onChange: changePage,
        }}
        toolBarRender={() => [
          // 新增商品
          <Button
            type="primary"
            key="primary"
            onClick={() => {
             // handleModalVisible(true);
             window.location.href = 'addgoodsform';
            }}
          >
            <PlusOutlined />新增
          </Button>,
        ]}
        // request={(params, sorter, filter) => queryRule({ ...params, sorter, filter })}
        request={
          (params,sorter,filter) => queryRule({ ...params,sorter,filter,currentPage}).then(response => {
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
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
            console.log(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              <FormattedMessage id="pages.searchTable.chosen" defaultMessage="Chosen" />{' '}
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
              <FormattedMessage id="pages.searchTable.item" defaultMessage="项" />
              &nbsp;&nbsp;
              <span>
                <FormattedMessage
                  id="pages.searchTable.totalServiceCalls"
                  defaultMessage="Total number of service calls"
                />{' '}
                {selectedRowsState.reduce((pre, item) => pre + item.callNo, 0)}{' '}
                <FormattedMessage id="pages.searchTable.tenThousand" defaultMessage="万" />
              </span>
            </div>
          }
        >
          <Button
            onClick={async () => {
              // console.log(selectedRowsState);
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            <FormattedMessage
              id="pages.searchTable.batchDeletion"
              defaultMessage="Batch deletion"
            />
          </Button>
          <Button type="primary">
            <FormattedMessage
              id="pages.searchTable.batchApproval"
              defaultMessage="Batch approval"
            />
          </Button>
        </FooterToolbar>
      )}
      <ModalForm
        title={intl.formatMessage({
          id: 'pages.searchTable.createForm.newRule',
          defaultMessage: 'New rule',
        })}
        width="400px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          const success = await handleAdd(value as TableListItem);
          if (success) {
            handleModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProFormText
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.ruleName"
                  defaultMessage="Rule name is required"
                />
              ),
            },
          ]}
          width="md"
          name="name"
        />
        <ProFormTextArea width="md" name="desc" />
      </ModalForm>
      <UpdateForm
        onSubmit={async (value) => {
          // console.log(value);
          const success = await handleUpdate(value);
          if (success) {
            handleUpdateModalVisible(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalVisible(false);
          setCurrentRow(undefined);
        }}
        updateModalVisible={updateModalVisible}
        values={currentRow || {}}
      />

      <Drawer
        width={600}
        visible={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.commodityName && (
          <ProDescriptions<TableListItem>
            column={2}
            title={currentRow?.commodityName}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.id,
              /*
              commodityName: currentRow?.commodityName,
              commodityStatus: currentRow?.commodityStatus,
              // description: currentRow?.description,
              guaranteePrice: currentRow?.guaranteePrice,
              number: currentRow?.number,
              // rentDays: currentRow?.rentDays,
              // rentPrice: currentRow?.rentPrice,
              // rentTime: currentRow.rentTime,
              storeId: 1,
              subImages: currentRow?.subImages,
              title: currentRow?.commodityName,
              gmtCreate: currentRow?.createdAt,
              */
            }}
            columns={columns as ProDescriptionsItemProps<TableListItem>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default GoodsTypeList;
