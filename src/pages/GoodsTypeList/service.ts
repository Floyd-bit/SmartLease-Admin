/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-06 11:21:09
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-17 15:20:30
 */
import request from '@/utils/request';
import type { TableListParams, TableListItem } from './data.d';

export async function queryRule(params?: TableListParams) {
  console.log(params);
  return request(`/api2/business/commodity/selectByStoreId?&page=${params?.currentPage}&size=${params?.pageSize}&storeId=1`
  );
}

export async function removeRule(params: { key: number[] }) {
  console.log("参数",params.key);
  return request(`/api2/business/commodity/deleteById?id=${params.key[0]}`, {
    method: 'DELETE',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function removeSingleRule(params: number) {
  return request(`/api2/business/commodity/deleteById?id=${params}`, {
    method: 'DELETE',
    data: {
      params,
      method: 'delete',
    },
  })
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
  return request(`/api2/business/commodity/update?id=${params.id}`, {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
