import request from 'umi-request';
import type { UserRegisterParams } from './index';

export async function fakeRegister(params: UserRegisterParams) {
  // 后台对接地址 '/api/customer/user/singup'
  return request('/api/register', {
    method: 'POST',
    data: params,
  });
}
