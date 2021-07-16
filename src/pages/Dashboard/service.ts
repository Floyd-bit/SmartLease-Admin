/*
 * @Description: 
 * @version: 1.0
 * @Author: 范玉琳
 * @Date: 2021-07-05 17:23:57
 * @LastEditors: 范玉琳
 * @LastEditTime: 2021-07-16 10:22:40
 */
import request from 'umi-request';

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}
