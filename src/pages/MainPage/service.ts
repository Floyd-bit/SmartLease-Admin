/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-13 10:59:59
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-16 20:53:46
 */
import request from 'umi-request';

const getOrderDataUrl = '/api4/getOrderData';
const getItemDataUrl = '/api4/getItemData';
const getOrderChartUrl = '/api4/getOrderChart';
const getSalesChartUrl = '/api4/getSalesChart';
const getOrderColumnChartUrl = '/api4/getOrderColumnChart';

export async function getOrderData() {
  return request(getOrderDataUrl, {
    method: 'GET',
  });
}

export async function getItemData() {
  return request(getItemDataUrl, {
    method: 'GET',
  });
}

export async function getOrderChart() {
  return request(getOrderChartUrl, {
    method: 'GET',
  });
}

export async function getSalesChart() {
  return request(getSalesChartUrl, {
    method: 'GET',
  });
}

export async function getOrderColumnChart() {
  return request(getOrderColumnChartUrl, {
    method: 'GET',
  });
}
