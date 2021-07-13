/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-13 14:46:43
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-13 14:55:20
 */
import { Card, message } from 'antd';
import ProForm, {
  ProFormDateRangePicker,
  ProFormDependency,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormUploadDragger,
} from '@ant-design/pro-form';
import { useRequest } from 'umi';
import type { FC } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { fakeSubmitForm } from './service';
import styles from './style.less';

const ShopCenter: FC<Record<string, any>> = () => {
  const { run } = useRequest(fakeSubmitForm, {
    manual: true,
    onSuccess: () => {
      message.success('提交成功');
    },
  });

  const onFinish = async (values: Record<string, any>) => {
    run(values);
  };

  return (
    <PageContainer content="填写信息以创建自己的商铺。">
      <Card bordered={false}>
        <ProForm
          hideRequiredMark
          style={{ margin: 'auto', marginTop: 8, maxWidth: 600 }}
          name="basic"
          layout="vertical"
          initialValues={{ public: '1' }}
          onFinish={onFinish}
        >
          <ProFormUploadDragger
            width='lg'
            label="商铺图片"
            name="image"  
          />
          <ProFormText
            width="md"
            label="商铺名称"
            name="title"
            rules={[
              {
                required: true,
                message: '请输入商铺名称',
              },
            ]}
            placeholder="给商铺起个名字"
          />
          <ProFormTextArea
            label="商铺简介"
            width="xl"
            name="goal"
            rules={[
              {
                required: true,
                message: '请输入商铺简介',
              },
            ]}
            placeholder="请输入简介"
          />
        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default ShopCenter;
