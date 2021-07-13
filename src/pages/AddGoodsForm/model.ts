/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-09 11:24:06
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-13 08:46:51
 */
import type { Effect } from 'umi';
import { message } from 'antd';
import { fakeSubmitForm } from './service';

export type ModelType = {
  namespace: string;
  state: {};
  effects: {
    submitRegularForm: Effect;
  };
};
const Model: ModelType = {
  namespace: 'addGoodsForm',

  state: {},

  effects: {
    *submitRegularForm({ payload }, { call }) {
      yield call(fakeSubmitForm, payload);
      message.success('提交成功');
    },
  },
};

export default Model;
