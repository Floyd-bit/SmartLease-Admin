/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-13 15:54:05
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-14 10:02:03
 */
import { Card, message } from 'antd';
import ProForm, {
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
} from '@ant-design/pro-form';
import { useRequest } from 'umi';
import type { FC } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { fakeSubmitForm } from './service';
import styles from './style.less';

const AddLogistics: FC<Record<string, any>> = () => {
  const { run } = useRequest(fakeSubmitForm, {
    manual: true,
    onSuccess: () => {
      message.success('提交成功');
    },
  });

  const onFinish = async (values: Record<string, any>) => {
    const value = {
      ...values,
      createTime: new Date(),
      storeId: 1
    }
    run(value);
  };

  return (
    <PageContainer content="添加运费模板">
      <Card bordered={false}>
        <ProForm
          hideRequiredMark
          style={{ margin: 'auto', marginTop: 8, maxWidth: 600 }}
          name="basic"
          layout="vertical"
          initialValues={{ public: '1' }}
          onFinish={onFinish}
        >
          <ProFormText
            width="md"
            label="模板名称"
            name="templateName"
            rules={[
              {
                required: true,
                message: '请输入模板名称',
              },
            ]}
            placeholder="给模板起个名字"
          />
          <ProFormSwitch
            name="isUsing"
            label="是否使用"
          />
          <ProFormSelect
            name="chargeMode"
            label="计费模式"
            options={[
              {
                value: 'BYPIECE',
                label: '按件计费',
              },
            ]}
          />
          <ProFormDigit
            label={
              <span>
                排名
                <em className={styles.optional}></em>
              </span>
            }
            name="rank"
            placeholder="请输入"
            min={0}
            max={100}
            width="xs"
            fieldProps={{
              formatter: (value) => `${value || 0}`,
              parser: (value) => (value ? value.replace('', '') : '0'),
            }}
          />

        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default AddLogistics;
