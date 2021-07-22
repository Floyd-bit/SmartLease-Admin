/*
 * @Description: 
 * @version: 1.0
 * @Author: 范玉琳
 * @Date: 2021-07-06 10:19:08
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-22 14:22:00
 */
import request from 'umi-request';
import type { ListItemDataType } from './data.d';

export async function queryFakeList(params: ListItemDataType) {
  // /api2/business/evaluation/selectByCommodityId?commodityId=1&page=1
  // return request(`/apis/fake_list`, {
  return request(`/api2/business/evaluation/selectByCommodityId?commodityId=2137&page=1`,{
    params,
  });
}

