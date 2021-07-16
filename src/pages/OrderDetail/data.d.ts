/*
 * @Description: 
 * @version: 1.0
 * @Author: 范玉琳
 * @Date: 2021-07-06 15:59:44
 * @LastEditors: 范玉琳
 * @LastEditTime: 2021-07-16 10:22:01
 */
export type BasicGood = {
  id: string;
  name?: string;
  barcode?: string;
  price?: string;
  num?: string | number;
  amount?: string | number;
};

export type BasicProgress = {
  key: string;
  time: string;
  rate: string;
  status: string;
  operator: string;
  cost: string;
};

export type BasicProfileDataType = {
  basicGoods: BasicGood[];
  basicProgress: BasicProgress[];
};
