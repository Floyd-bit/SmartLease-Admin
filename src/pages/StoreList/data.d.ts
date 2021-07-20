/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-19 09:37:07
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-20 08:42:07
 */
export type Member = {
  avatar: string;
  name: string;
  id: string;
};

export type CardListItemDataType = {
  id: string;
  owner: string;
  storeName: string; // 商铺名称
  avatar: string; // 头像
  cover: string;
  status: 'normal' | 'exception' | 'active' | 'success';
  icon: string; // 商铺头像
  percent: number;
  logo: string;
  href: string;
  body?: any;
  updatedAt: number;
  createdAt: number;
  subDescription: string;
  introduction: string; // 商铺描述
  activeUser: number;
  newUser: number;
  star: number;
  like: number;
  message: number;
  content: string;
  members: Member[];
};
