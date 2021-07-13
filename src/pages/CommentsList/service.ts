import request from 'umi-request';
import type { ListItemDataType } from './data.d';

export async function queryFakeList(params: ListItemDataType) {
  return request('/apis/fake_list', {
    params,
  });
}
