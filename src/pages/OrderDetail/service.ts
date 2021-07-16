/*
 * @Description: 
 * @version: 1.0
 * @Author: 范玉琳
 * @Date: 2021-07-06 15:59:44
 * @LastEditors: 范玉琳
 * @LastEditTime: 2021-07-16 10:22:09
 */
import request from 'umi-request';

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}
