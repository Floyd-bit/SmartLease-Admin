import type { Effect, Reducer } from 'umi';

import { fakeRegister } from './service';

export type StateType = {
  // status?: '创建成功' | '手机号重复';
  status?: 'ok' | 'error';
  currentAuthority?: 'user' | 'guest' | 'admin';
};

export type ModelType = {
  namespace: string;
  state: StateType;
  effects: {
    submit: Effect;
  };
  reducers: {
    registerHandle: Reducer<StateType>;
  };
};

const Model: ModelType = {
  namespace: 'userRegister',

  state: {
    status: undefined,
  },

  effects: {
    *submit({ payload }, { call, put }) {
      const response = yield call(fakeRegister, payload);
      yield put({
        type: 'registerHandle',
        payload: response,
      });
    },
  },

  reducers: {
    registerHandle(state, { payload }) {
      return {
        ...state,
        // 与后台对接改为status
        status: payload.status,
      };
    },
  },
};

export default Model;