/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-06 10:19:08
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-14 16:18:03
 */
export type Member = {
  avatar: string;
  name: string;
  id: string;
};

export type ListItemDataType = {
  id: string;
  userNickname: string; // 用户昵称
  commodityName: string; // 商品名称
  avatar: string; // 头像
  cover: string;
  status: 'normal' | 'exception' | 'active' | 'success';
  percent: number;
  logo: string;
  href: string;
  body?: any;
  updatedAt: number;
  time: Date; // 发布时间
  subDescription: string;
  content: string; // 评论内容
  activeUser: number;
  newUser: number;
  star: number; // 收藏
  score: number; // 赞
  message: number;
  members: Member[];
};
