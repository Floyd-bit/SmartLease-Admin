/*
 * @Description: 
 * @version: 1.0
 * @Author: 范玉琳
 * @Date: 2021-07-06 10:19:08
 * @LastEditors: 范玉琳
 * @LastEditTime: 2021-07-16 10:23:19
 */

import type { Effect, Reducer } from 'umi';
import type { ListItemDataType } from './data.d';
import { queryFakeList } from './service';

export type StateType = {
  list: ListItemDataType[];
};

export type ModelType = {
  namespace: string;
  state: StateType;
  effects: {
    fetch: Effect;
    appendFetch: Effect;
  };
  reducers: {
    queryList: Reducer<StateType>;
    appendList: Reducer<StateType>;
  };
};

const Model: ModelType = {
  namespace: 'commentsList',

  state: {
    list: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      // 调用获取评论接口
      const response = yield call(queryFakeList, payload);
      console.log(response)
      yield put({
        type: 'queryList',
        payload: Array.isArray(response.data.value.records) ? response.data.value.records : [],
      });
    },
    *appendFetch({ payload }, { call, put }) {
      const response = yield call(queryFakeList, payload);
      yield put({
        type: 'appendList',
        payload: Array.isArray(response.data.vaule.records) ? response.data.value.records : [],
      });
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    appendList(state, action) {
      return {
        ...state,
        list: (state as StateType).list.concat(action.payload),
      };
    },
  },
};

export default Model;
