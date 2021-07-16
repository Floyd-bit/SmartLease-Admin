/*
 * @Description: 
 * @version: 1.0
 * @Author: 范玉琳
 * @Date: 2021-07-06 15:59:44
 * @LastEditors: 范玉琳
 * @LastEditTime: 2021-07-16 10:22:06
 */
import type { Effect, Reducer } from 'umi';

import type { BasicGood } from './data.d';
import { queryBasicProfile } from './service';

export type StateType = {
  basicGoods: BasicGood[];
};

export type ModelType = {
  namespace: string;
  state: StateType;
  effects: {
    fetchBasic: Effect;
  };
  reducers: {
    show: Reducer<StateType>;
  };
};

const Model: ModelType = {
  namespace: 'orderDetail',

  state: {
    basicGoods: [],
  },

  effects: {
    *fetchBasic(_, { call, put }) {
      const response = yield call(queryBasicProfile);
      yield put({
        type: 'show',
        payload: response,
      });
    },
  },

  reducers: {
    show(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default Model;
