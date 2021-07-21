/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-20 16:19:10
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-21 23:08:48
 */
import { request } from 'umi';
import type { TableListItem } from '.';

export async function queryRule(params?: TableListItem) {
    console.log(params);
    return request(`/api1/customer/order/getByUserId?pageNum=1&pageSize=5&userId=3`
    );
  }