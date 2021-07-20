/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-06 10:18:02
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-20 10:50:23
 */
export type Member = {
  avatar: string;
  name: string;
  id: string;
};

export type BasicListItemDataType = {
  id: string;
  orderItemId: string; // owner
  customerNickName: string; // 用户昵称
  avatar: string;
  cover: string;
  status: 'normal' | 'exception' | 'active' | 'success';
  percent: number; // 进度
  logo: string; // 头像
  payment: number; // 支付金额
  href: string;
  body?: any;
  updatedAt: number;
  createTime: number; // 创建时间
  problemDescription: string; // 描述
  description: string;
  activeUser: number;
  newUser: number;
  star: number;
  like: number;
  message: number;
  content: string;
  members: Member[];
};
