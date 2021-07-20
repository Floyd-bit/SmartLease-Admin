/*
 * @Description: 
 * @version: 1.0
 * @Author: 范玉琳
 * @Date: 2021-07-06 10:19:08
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-20 14:58:23
 */

import { Avatar } from 'antd';
import React from 'react';
import moment from 'moment';
import styles from './index.less';

type ArticleListContentProps = {
  data: {
    content: React.ReactNode;
    time: number;
    avatar: string;
    userNickName: string;
    href: string;
  };
};

const ArticleListContent: React.FC<ArticleListContentProps> = ({
  data: { content, time, avatar, userNickname, href },
}) => (
  <div className={styles.listContent}>
    <div className={styles.description}>{content}</div>
    <div className={styles.extra}>
      <Avatar src={avatar} size="small" />
      <a href={href}>{userNickname}</a> 发布在 <a href={href}>{href}</a>
      <em>{moment(time).format('YYYY-MM-DD HH:mm')}</em>
    </div>
  </div>
);

export default ArticleListContent;
