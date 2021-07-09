export type TableListItem = {
  key: number;
  disabled?: boolean;
  href: string;
  avatar: string; // 商品图片
  no: string; // 商品编号
  name: string; // 商品名称
  owner: string;
  desc: string;
  callNo: number; // 交易量
  status: number; // 是否上架
  amount: number; // 库存
  updatedAt: Date; // 加入时间
  money: number; // 押金
  createdAt: Date;
  progress: number;
};

export type TableListPagination = {
  total: number;
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
