/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-06 11:21:09
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-12 11:35:56
 */
import request from '@/utils/request';
import type { TableListParams, TableListItem } from './data.d';

export async function queryRule(params?: TableListParams) {
  console.log(params);
  return request(`/api2/business/commodity/selectByStoreId?&page=${1}&size=${params?.pageSize}&storeId=0`
  );
}

export async function removeRule(params: { key: number[] }) {
  console.log("参数",params.key);
  return request(`/api2/business/commodity/deleteById?id=${params.key[0]}`, {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListItem) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api2/business/commodity/update', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
