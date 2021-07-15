import { request } from 'umi';
import type { Params, ListItemDataType } from 'ListSearchArticles/src/data';

export async function queryFakeList(
  params: Params,
): Promise<{ data: { value: ListItemDataType[] } }> {
  return request('/api2/business/album/selectByStoreId?storeId=1', {
 //  return request('/api/fake_list',{
    params,
  });
}
