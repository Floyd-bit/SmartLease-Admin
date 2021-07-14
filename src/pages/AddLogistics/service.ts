/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-13 15:54:05
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-14 09:58:18
 */
import { request } from 'umi';

export async function fakeSubmitForm(params: any) {
  return request('/api2/business/freightTemplate/create', {
    method: 'POST',
    data: params,
  });
}
