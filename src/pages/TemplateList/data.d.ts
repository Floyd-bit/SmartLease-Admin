/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-14 10:09:39
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-14 10:36:44
 */
export type TableListItem = {
  key: number;
  disabled?: boolean;
  href: string;
  templateName: string; // 模板名称
  id: number; // id
  chargeMode: string; // 计费模式
  commodityStatus: string; // 是否上架
  rank: number; // 排序
  createdTime: Date; // 创建时间
  isUsing: boolean; // 是否使用
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
  status?: string;
  name?: string;
  desc?: string;
  key?: number;
  pageSize?: number;
  currentPage?: number;
  filter?: Record<string, any[]>;
  sorter?: Record<string, any>;
};
