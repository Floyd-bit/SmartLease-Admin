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
  };
  reducers: {
    queryList: Reducer<StateType>;
  };
};

const Model: ModelType = {
  namespace: 'listSearchProjects',

  state: {
    list: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryFakeList, payload);
      console.log(response)
      yield put({
        type: 'queryList',
        payload: Array.isArray(response.data.value) ? response.data.value : [],
      });
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        list: action.payload
      };
    },
  },
};

export default Model;
