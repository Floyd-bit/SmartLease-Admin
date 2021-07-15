/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-15 11:48:51
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-15 15:39:16
 */
import React from "react";
import styles from "./index.less";
import { Card, Rate } from "antd";
import type { storeDetail } from "..";

export default (props: storeDetail) => (
  <div className={styles.container}>
    <div id="components-card-demo-basic">
      <div>
        <Card
          title="商铺信息"
          style={{ width: 500 }}
        >
          <p>商铺名称：{props.storeName}</p>
          <p>店主ID：{props.storekeeperId}</p>
          <p>简介：{props.introduction}</p>
        </Card>
        <Card
          size="small"
          title="信用信息"
          style={{ width: 500 }}
        >
          <p>信用评分：<Rate disabled value={props.creditScore} /></p>
          <p>商铺评分：<Rate disabled value={props.score}/></p>
        </Card>
      </div>
    </div>
  </div>
);
