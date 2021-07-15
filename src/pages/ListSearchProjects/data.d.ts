/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-12 09:45:04
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-15 11:58:00
 */
export type Member = {
  avatar: string;
  name: string;
  id: string;
};

export interface Params {
  count: number;
}
export interface ListItemDataType {
  id: number;
  owner: string;
  name: string; // 相册标题
  avatar: string;
  cover: string; // 相册封面
  pictures: any; // 相册图片
  status: 'normal' | 'exception' | 'active' | 'success';
  percent: number;
  logo: string;
  href: string;
  body?: any;
  updatedAt: number;
  createdAt: number;
  subDescription: string; // 相册描述
  description: string;
  activeUser: number;
  newUser: number;
  star: number;
  like: number;
  message: number;
  content: string;
  members: Member[];
};
