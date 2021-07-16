/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-05 10:45:55
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-16 22:07:42
 */
import request from '@/utils/request';

export type LoginParamsType = {
  userName: string;
  password: string;
  phone: string;
  captcha: string;
};

export async function fakeAccountLogin(params: LoginParamsType) {
  // 与后台对接 /api/customer/user/login
  // mock地址 /api/login/account
  return request('/api1/customer/user/login', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
