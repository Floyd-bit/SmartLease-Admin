/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-05 10:45:55
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-20 23:32:37
 */
import request from '@/utils/request';

export async function query(): Promise<any> {
  return request('/api4/users');
}

export async function queryCurrent(): Promise<any> {
  // return request('/apis/currentUser');
  return request('/api4/currentUser');
}

export async function queryAdmin(): Promise<any> {
  // return request('/apis/currentAdmin');
  return request('/api4/currentAdmin');
}

export async function queryNotices(): Promise<any> {
  return request('/api4/notices');
}
