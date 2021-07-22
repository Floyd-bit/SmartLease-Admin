/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-09 11:24:06
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-22 14:49:36
 */
import { Button, Card, message } from 'antd';
import ProForm, {
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
  ProFormUploadButton,
  ProFormUploadDragger,
} from '@ant-design/pro-form';
import { useRequest } from 'umi';
import type { FC } from 'react';
import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { fakeSubmitForm, uploadFile } from './service';
import styles from './style.less';
import axios from 'axios';
import { result } from 'lodash';

const AddGoodsForm: FC<Record<string, any>> = () => {
  const { run } = useRequest(fakeSubmitForm, {
    manual: true,
    onSuccess: () => {
      message.success('提交成功');
    },
  });

  /*
    // 将base64转换为文件
    const dataURLtoFile = (dataurl, filename) => { 
	    const arr = dataurl.split(',');
	    const mime = arr[0].match(/:(.*?);/)[1];
	    const bstr = atob(arr[1]);
	    let n = bstr.length;
	    const u8arr = new Uint8Array(n);
	    while (n--) {
	        u8arr[n] = bstr.charCodeAt(n);
	    }
	    return new File([u8arr], filename, { type: mime });
	};  

  const upload = (values: any) => {
    // const file = dataURLtoFile(values[0], values[0].name);
    // console.log("文件",file)
    axios.post('/api3/api/file/upload', values[0],{
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    })
    .then(function (response) {
      console.log(response.data.msg);
        if(response.data.msg === "上传成功"){
          let result = response.data.imgUrl;
        }
        else{
          alert("上传失败");
        }
        return result;
    })
    .catch(err => console.log(err))
  };

  */

  const onFinish = async (values: Record<string, any>) => {
    // const file = upload(values.subImages);
    // console.log(file);
    const status = values.commodityStatus?"ONSALE":"OFFSALE";
    // const gid = values.id.praseInt();
    const value = {
      ...values,
      commodityStatus: status,
      attribute: {
        /*
        additionalProp1: values.additionalProp1,
        additionalProp2: values.additionalProp2,
        additionalProp3: values.additionalProp3,
        */
        "origin":"武汉","weight":"2kg","detailImage":"https://img.alicdn.com/imgextra/i2/847491752/O1CN01YeZ2HY1OoSaL5choQ_!!847491752.jpg","options":"[{\"title\":\"颜色\",\"values\":[\"银色\",\"蓝色\",\"黑色\"]},{\"title\":\"材质\",\"values\":[\"金属\",\"塑料\",\"陶瓷\"]}]"
      },
      type: [values.type],
      uniform: {
        /*
        additionalProp1: [values.additionalProp4],
        additionalProp2: [values.additionalProp5],
        */
        "images":["https://gd1.alicdn.com/imgextra/i1/847491752/O1CN01yacgLS1OoSaNHEwTN_!!847491752.jpg","https://gd2.alicdn.com/imgextra/i2/847491752/O1CN01NPvr8u1OoSY888eP8_!!847491752.jpg","https://gd3.alicdn.com/imgextra/i3/847491752/O1CN01Zq89n01OoSYBXApdX_!!847491752.jpg","https://gd2.alicdn.com/imgextra/i4/847491752/O1CN01mRT1M51OoSaQQHKyY_!!847491752.jpg"]
      },
      rentTime: '1',
      number: 1,
      score: 1,
      subImages: 'https://file-gateway.52rental.com/file-gateway/stable/b4558fa0ccad4b3a8d243c2fa8e94759.png',
      storeId: 1,
      storeName: '租赁专业户',
      tardingVolume: 0,
      mark: 0,
      guaranteePrice: 100,
    };    
    // console.log(value);
    run(value);
    console.log("完成");
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
            label="品牌"
            name="additionalProp2"
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
            name="additionalProp3"
            rules={[
              {
                required: true,
                message: '输入图片名称',
              },
            ]}
            placeholder="请输入"
          />
              <ProFormSelect
                initialValue="游戏装备"
                options={[
                  {
                    value: 1,
                    label: '游戏装备',
                  },
                  {
                    value: 2,
                    label: '数码摄影',
                  },
                  {
                    value: 3,
                    label: '电脑办公',
                  },
                  {
                    value: 4,
                    label: '精品手机',
                  },
                  {
                    value: 5,
                    label: '娱乐影音',
                  },
                ]}
                width="xs"
                name="additionalProp4"
                label="分类"
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
            name="additionalProp5"
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
            width='md'
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
