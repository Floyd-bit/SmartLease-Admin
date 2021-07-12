import { Card, message } from 'antd';
import ProForm, {
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
  ProFormUploadDragger,
} from '@ant-design/pro-form';
import { useRequest } from 'umi';
import type { FC } from 'react';
import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { fakeSubmitForm } from './service';
import styles from './style.less';

const AddGoodsForm: FC<Record<string, any>> = () => {
  const { run } = useRequest(fakeSubmitForm, {
    manual: true,
    onSuccess: () => {
      message.success('提交成功');
    },
  });

  const onFinish = async (values: Record<string, any>) => {
    const status = values.commodityStatus?"ONSALE":"OFFSALE";
    // const gid = values.id.praseInt();
    const value = {
      ...values,
      commodityStatus: status,
      attribute: {
        additionalProp1: values.additionalProp1,
        additionalProp2: values.additionalProp2,
        additionalProp3: values.additionalProp3,
      },
      type: [values.type],
      uniform: {
        additionalProp1: [values.additionalProp4],
        additionalProp2: [values.additionalProp5],
      },
      rentTime: '1',
      number: 1,
      score: 1,
      storeId: 0,
      storeName: '1',
      subImages: '1',
      tardingVolume: 0,
      mark: 0,
      guaranteePrice: 100,
    };
    
    console.log(value);
    run(value);
  };

  return (
    <PageContainer>
      <Card bordered={false}>
        <ProForm
          hideRequiredMark
          style={{ marginTop: 8 }}
          name="basic"
          layout="vertical"
          initialValues={{ public: '1' }}
          onFinish={onFinish}
        >
          <ProFormText
            width="md"
            label="图片标题"
            name="title"
            rules={[
              {
                required: true,
                message: '输入图片名称',
              },
            ]}
            placeholder="输入图片名称"
          />
          <ProFormText
            label="简略标题"
            width="xl"
            name="commodityName"
            rules={[
              {
                required: true,
                message: '请输入简略标题',
              },
            ]}
            placeholder="请输入简略标题"
          />
          <ProForm.Group>
          <ProFormText
            label="商品编号"
            name="id"
            rules={[
              {
                required: true,
                message: '输入图片名称',
              },
            ]}
            placeholder="请输入"
          />
          <ProFormText
            label="产地"
            name="additionalProp1"
            rules={[
              {
                required: true,
                message: '输入图片名称',
              },
            ]}
            placeholder="请输入"
          />
          <ProFormText
            label="材质"
            name="additionalProp2"
            rules={[
              {
                required: true,
                message: '输入图片名称',
              },
            ]}
            placeholder="请输入"
          />
          <ProFormText
            label="品牌"
            name="additionalProp3"
            rules={[
              {
                required: true,
                message: '输入图片名称',
              },
            ]}
            placeholder="请输入"
          />
          </ProForm.Group>
          <ProForm.Group>
          <ProFormText
            label="产品重量"
            name="additionalProp4"
            rules={[
              {
                required: true,
                message: '输入图片名称',
              },
            ]}
            placeholder="请输入"
          />
              <ProFormSelect
                initialValue="money"
                options={[
                  {
                    value: 'money',
                    label: '确认金额',
                  },
                ]}
                width="xs"
                name="additionalProp5"
                label="单位"
              />
          <ProFormText
            label="展示价格"
            name="rentPrice"
            rules={[
              {
                required: true,
                message: '输入图片名称',
              },
            ]}
            placeholder="请输入（元）"
          />
          <ProFormText
            label="市场价格"
            name="additionalProp6"
            rules={[
              {
                required: true,
                message: '输入图片名称',
              },
            ]}
            placeholder="请输入（元）"
          />
          </ProForm.Group>
          <ProFormText
            label="关键词"
            width="xl"
            name="type"
            rules={[
              {
                required: true,
                message: '请输入关键词',
              },
            ]}
            placeholder="以逗号分开，最多5个"
          />
          <ProFormTextArea
            label="内容概要"
            name="subdescription"
            width="xl"
            rules={[
              {
                required: true,
                message: '请输入内容概要',
              },
            ]}
            placeholder="说点什么，至少输入10个字符"
          />
          <ProFormUploadDragger
            label="图片上传"
            name="subImages"
            width="md"
          />
          <ProFormTextArea
            label="详细内容"
            name="description"
            width="xl"
            rules={[
              {
                required: true,
                message: '请输入内容概要',
              },
            ]}
          />
         <ProFormSwitch
          label="是否允许评论"
          name="commodityStatus"
         />
        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default AddGoodsForm;
