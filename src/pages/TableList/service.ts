/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-20 16:19:10
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-23 17:04:14
 */
import { request } from 'umi';
import type { statusType, TableListItem } from '.';

export async function queryRule(params?: TableListItem) {
    console.log(params);
    return request(`/api1/customer/order/getByUserId?pageNum=1&pageSize=5&userId=3`
    );
  }

export async function updateStatus(params?: statusType) {
  return request(`/api6/release/edit-order-status?id=${params?.id}&status=${params?.status}`);
}