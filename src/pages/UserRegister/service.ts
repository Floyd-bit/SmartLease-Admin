/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-05 17:23:57
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-10 09:02:30
 */
import request from 'umi-request';
import type { UserRegisterParams } from './index';

export async function fakeRegister(params: UserRegisterParams) {
  // 后台对接地址 '/api/customer/user/singUp'
  // mock地址 '/api/register'
  return request('/api/customer/user/singUp', {
    method: 'POST',
    data: params,
  });
}
