/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-15 11:50:44
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-15 14:43:39
 */
import React from "react";
import styles from "./index.less";
import { Carousel, Image} from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-carousel-demo-autoplay">
      <Carousel autoplay>
        <div>
          <Image src="https://file-gateway.52rental.com/file-gateway/stable/00466eeb303e43f798d8773bbd663b88.jpg"/>
        </div>
        <div>
          <Image src="https://file-gateway.52rental.com/file-gateway/stable/f4953f54f2f1472cad96b36783a2d06a.jpg"/>
        </div>
        <div>
          <Image src="https://file-gateway.52rental.com/file-gateway/stable/062045ad14c94177955b2146d3a0b81a.png"/>
        </div>
        <div>
          <Image src="https://file-gateway.52rental.com/file-gateway/stable/c99d6234a96b41c9b21f8858aa65764c.png"/>
        </div>
      </Carousel>
    </div>
  </div>
);
