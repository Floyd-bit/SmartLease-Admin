/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-06 10:18:02
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-20 14:16:31
 */
import request from 'umi-request';
import type { BasicListItemDataType } from './data.d';

type ParamsType = {
  count?: number;
} & Partial<BasicListItemDataType>;

export async function queryFakeList(params: ParamsType) {
  // return request('/api2/business/problem/selectById?id=5', {
  return request('/api2/business/problem/selectByIsSolve?storeId=1',{
    params,
  });
}

export async function removeFakeList(params: ParamsType) {
  return request('/api2/business/problem/deleteById', {
    method: 'DELETE',
    params,
    data: {
      params,
      method: 'delete',
    },
  });
}

export async function addFakeList(params: ParamsType) {
  const { count = 5, ...restParams } = params;
  return request('/apis/fake_list', {
    method: 'POST',
    params: {
      count,
    },
    data: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function updateFakeList(params: ParamsType) {
  const { count = 5, ...restParams } = params;
  return request('/apis/fake_list', {
    method: 'POST',
    params: {
      count,
    },
    data: {
      ...restParams,
      method: 'update',
    },
  });
}
