import request from 'umi-request';
import type { ListItemDataType } from './data.d';

export async function queryFakeList(params: ListItemDataType) {
  // /api2/business/evaluation/selectByCommodityId?commodityId=1&page=1
  // return request(`/apis/fake_list`, {
  return request(`/api2/business/evaluation/selectByCommodityId?commodityId=1&page=1`,{
    params,
  });
}

