/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-09 11:24:06
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-12 10:43:23
 */
import { request } from 'umi';

export async function fakeSubmitForm(params: any) {
  // mock数据接口 /api/basicForm
  return request('/api2/business/commodity/create', {
    method: 'POST',
    data: params,
  });
}
