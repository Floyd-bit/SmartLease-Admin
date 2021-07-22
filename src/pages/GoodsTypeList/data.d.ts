/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-06 11:23:09
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-22 11:05:25
 */
export type TableListItem = {
  key: number;
  disabled?: boolean;
  href: string;
  subImages: string; // 商品图片
  id: number; // 商品编号
  commodityName: string; // 商品名称
  owner: string;
  desc: string;
  tradeNumber: number; // 交易量
  commodityStatus: string; // 是否上架
  number: number; // 库存
  releaseTime: Date; // 加入时间
  guaranteePrice: number; // 押金
  createdAt: Date;
  progress: number;
};

export type TableListPagination = {
  totalPages: number;
  pageSize: number;
  current: number;
};

export type TableListData = {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
};

export type TableListParams = {
  id?: number;
  status?: string;
  name?: string;
  desc?: string;
  key?: number;
  pageSize?: number;
  currentPage?: number;
  filter?: Record<string, any[]>;
  sorter?: Record<string, any>;
};
