import request from 'umi-request';

const getOrderDataUrl = '/api/getOrderData';
const getItemDataUrl = '/api/getItemData';
const getOrderChartUrl = '/api/getOrderChart';
const getSalesChartUrl = '/api/getSalesChart';

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
