import React from 'react';
import { Modal } from 'antd';
import {
  ProFormText,
  ProFormTextArea,
  StepsForm,
  ProFormRadio,
  ProFormDateTimePicker,
} from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';

import type { TableListItem } from '../data.d';

export type FormValueType = {
  id?: number;
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<TableListItem>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<TableListItem>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const intl = useIntl();
  return (
    <StepsForm
      stepsProps={{
        size: 'small',
      }}
      stepsFormRender={(dom, submitter) => {
        return (
          <Modal
            width={640}
            bodyStyle={{ padding: '32px 40px 48px' }}
            destroyOnClose
            title={intl.formatMessage({
              id: 'pages.searchTable.updateForm.ruleConfig',
              defaultMessage: '编辑租品',
            })}
            visible={props.updateModalVisible}
            footer={submitter}
            onCancel={() => {
              props.onCancel();
            }}
          >
            {dom}
          </Modal>
        );
      }}
      onFinish={props.onSubmit}
    >
      <StepsForm.StepForm
        initialValues={{
          id: props.values.id,
          commodityName: props.values.commodityName,
          subImages: props.values.subImages,
        }}
        title={intl.formatMessage({
          id: 'pages.searchTable.updateForm.basicConfig',
          defaultMessage: '基本信息',
        })}
      >
        <ProFormText
          name="id"
          label="商品编号"
          width="md"
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.updateForm.ruleName.nameRules"
                  defaultMessage="请输入规则名称！"
                />
              ),
            },
          ]}
        />
        <ProFormText
          name="commodityName"
          label={intl.formatMessage({
            id: 'pages.searchTable.updateForm.ruleName.nameLabel',
            defaultMessage: '商品名称',
          })}
          width="md"
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.updateForm.ruleName.nameRules"
                  defaultMessage="请输入规则名称！"
                />
              ),
            },
          ]}
        />
        <ProFormTextArea
          name="subImages"
          width="md"
          label={intl.formatMessage({
            id: 'pages.searchTable.updateForm.ruleDesc.descLabel',
            defaultMessage: '规则描述',
          })}
          placeholder={intl.formatMessage({
            id: 'pages.searchTable.updateForm.ruleDesc.descPlaceholder',
            defaultMessage: '请输入至少五个字符',
          })}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.updateForm.ruleDesc.descRules"
                  defaultMessage="请输入至少五个字符的规则描述！"
                />
              ),
              min: 5,
            },
          ]}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        initialValues={{
          commodityStatus: 'ONSALE',
          number: props.values.number,
          tradeNumber: props.values.tradeNumber
        }}
        title="配置商品属性"
      >
        <ProFormRadio.Group
          name="commodityStatus"
          label="是否上架"
          options={[
            {
              value: 'ONSALE',
              label: '是',
            },
            {
              value: 'OFFSALE',
              label: '否',
            },
          ]}
        />
        <ProFormText
          name="number"
          label="库存"
          width="md"
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.updateForm.ruleName.nameRules"
                  defaultMessage="请输入规则名称！"
                />
              ),
            },
          ]}
        />
        <ProFormText
          name="tradeNumber"
          label="交易量"
          width="md"
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.updateForm.ruleName.nameRules"
                  defaultMessage="请输入规则名称！"
                />
              ),
            },
          ]}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        initialValues={{
          releaseTime: props.values.releaseTime,
          guaranteePrice: props.values.guaranteePrice
        }}
        title="配置商品属性"
      >
        <ProFormDateTimePicker
          name="releaseTime"
          width="md"
          label="加入时间"
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.updateForm.schedulingPeriod.timeRules"
                  defaultMessage="请选择开始时间！"
                />
              ),
            },
          ]}
        />
        <ProFormText
          name="guranteePrice"
          label="押金"
          width="md"
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.updateForm.ruleName.nameRules"
                  defaultMessage="请输入规则名称！"
                />
              ),
            },
          ]}
        />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
