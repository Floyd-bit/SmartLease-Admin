/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-13 14:46:43
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-14 09:37:48
 */
import { request } from 'umi';

export async function fakeSubmitForm(params: any) {
  return request('/api2/business/store/create', {
    method: 'POST',
    data: params,
  });
}
