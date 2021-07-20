/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-19 09:37:07
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-20 16:19:26
 */
import { request } from 'umi';
import type { CardListItemDataType } from './data.d';

export async function queryFakeList(params: {
  count: number;
}): Promise<{ data: { list: CardListItemDataType[] } }> {
  return request('/api2/business/store/getList?pageNum=1&pageSize=10', {
    params,
  });
}
