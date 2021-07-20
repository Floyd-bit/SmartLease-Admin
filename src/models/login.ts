/*
 * @Description: 登录模块
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-05 10:45:55
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-20 23:39:37
 */
import { stringify } from 'querystring';
import type { Reducer, Effect } from 'umi';
import { history } from 'umi';

import { fakeAccountLogin } from '@/services/login';
import { getAuthority, setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { message } from 'antd';

export type StateType = {
  // status?: 'ok' | 'error';
  status?: string;
  type?: string;
  currentAuthority?: 'user' | 'guest' | 'admin';
  userId?: string;
  // currentAuthority: 'admin';
};

export type LoginModelType = {
  namespace: string;
  state: StateType;
  effects: {
    login: Effect;
    logout: Effect;
  };
  reducers: {
    changeLoginStatus: Reducer<StateType>;
  };
};

let phoneNum: string;
let result: any;

const go = () => {
  const urlParams = new URL(window.location.href);
  const params = getPageQuery();
  message.success('🎉 🎉 🎉  登陆成功！');
  let { redirect } = params as { redirect: string };
  if (redirect) {
    const redirectUrlParams = new URL(redirect);
    if (redirectUrlParams.origin === urlParams.origin) {
      redirect = redirect.substr(urlParams.origin.length);
      if (window.routerBase !== '/') {
        redirect = redirect.replace(window.routerBase, '/');
      }
      if (redirect.match(/^\/.*#/)) {
        redirect = redirect.substr(redirect.indexOf('#') + 1);
      }
    } else {
      window.location.href = '/';
      return;
    }
  }
  history.replace(redirect || '/');
}

const Model: LoginModelType = {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {
      phoneNum = payload.phone;
      if(phoneNum !== 'admin'){
      const response = yield call(fakeAccountLogin, payload);   
      // setAuthority('user');
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      result = response;
    }
      // Login successfully
      // 与后台对接时判断条件改为'登陆成功'
      if(phoneNum === 'admin') {
        setAuthority('admin');
        go();
      }
      else if (result.message === '登陆成功') {
        // console.log(response);
        setAuthority('user');
        go();
      }
    },

    logout() {
      const { redirect } = getPageQuery();
      // Note: There may be security issues, please note
      if (window.location.pathname !== '/user/login' && !redirect) {
        history.replace({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        });
      }
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      // setAuthority(payload.currentAuthority);
      // 后端接口尚未完善
      // setAuthority('admin');
      return {
        ...state,
        // 与后台对接时改为message
        status: payload.message,
        // type: payload.type,
        type: 'mobile',
        userId: payload.data,
      };
    },
  },
};

export default Model;
