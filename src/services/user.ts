/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-05 10:45:55
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-16 21:53:35
 */
import request from '@/utils/request';

export async function query(): Promise<any> {
  return request('/api4/users');
}

export async function queryCurrent(): Promise<any> {
  return request('/apis/currentUser');
}

export async function queryNotices(): Promise<any> {
  return request('/api4/notices');
}
