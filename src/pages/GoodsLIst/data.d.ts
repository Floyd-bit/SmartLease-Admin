/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-06 10:18:02
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-15 16:39:15
 */
export type Member = {
  avatar: string;
  name: string;
  id: string;
};

export type BasicListItemDataType = {
  id: string;
  owner: string; // owner
  title: string; // 用户昵称
  avatar: string;
  cover: string;
  status: 'normal' | 'exception' | 'active' | 'success';
  percent: number; // 进度
  logo: string; // 头像
  href: string;
  body?: any;
  updatedAt: number;
  createdAt: number;
  subDescription: string; // 描述
  description: string;
  activeUser: number;
  newUser: number;
  star: number;
  like: number;
  message: number;
  content: string;
  members: Member[];
};
