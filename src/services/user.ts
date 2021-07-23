/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-05 10:45:55
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-23 16:39:01
 */
import request from '@/utils/request';

export async function query(): Promise<any> {
  return request('/api5/users');
}

export async function queryCurrent(): Promise<any> {
  // return request('/apis/currentUser');
  return request('/api5/currentUser');
}

export async function queryAdmin(): Promise<any> {
  // return request('/apis/currentAdmin');
  return request('/api5/currentAdmin');
}

export async function queryNotices(): Promise<any> {
  return request('/api5/notices');
}
