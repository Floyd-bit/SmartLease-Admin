/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-13 15:00:23
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-13 15:03:40
 */
import { request } from 'umi';
import type { CardListItemDataType } from './data.d';

export async function queryFakeList(params: {
  count: number;
}): Promise<{ data: { list: CardListItemDataType[] } }> {
  return request('/apis/card_fake_list', {
    params,
  });
}
