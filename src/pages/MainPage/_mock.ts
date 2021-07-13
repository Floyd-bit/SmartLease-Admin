/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-13 10:59:59
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-13 13:40:11
 */
import type { Request, Response } from 'express';

export default {
  'GET  /api/getOrderData': (_: Request, res: Response) => {
    res.send({
      status: '200',
      data: [
        {
          tableTitle: '待支付订单',
          number: 0,
        },
        {
          tableTitle: '代发货订单',
          number: 10,
        },
        {
          tableTitle: '待收货订单',
          number: 13,
        },
        {
          tableTitle: '待支付订单',
          number: 26,
        },
        {
          tableTitle: '交易失败',
          number: 30,
        },
      ],
    });
  },
  'GET  /api/getItemData': (_: Request, res: Response) => {
    res.send({
      status: '200',
      data: [
        {
          tableTitle: '待审核商品',
          number: 120,
        },
        {
          tableTitle: '库存警告商品',
          number: 34,
        },
        {
          tableTitle: '上架商品',
          number: 23,
        },
        {
          tableTitle: '下架商品',
          number: 46,
        },
        {
          tableTitle: '商品评论',
          number: 20,
        },
      ],
    });
  },
  'GET  /api/getOrderChart': (_: Request, res: Response) => {
    res.send({
      status: '200',
      data: [
        {
          Date: '2010-01',
          income: 1998,
        },
        {
          Date: '2010-02',
          income: 1850,
        },
        {
          Date: '2010-03',
          income: 1720,
        },
        {
          Date: '2010-04',
          income: 1818,
        },
        {
          Date: '2010-05',
          income: 1920,
        },
        {
          Date: '2010-06',
          income: 1802,
        },
        {
          Date: '2010-07',
          income: 1945,
        },
        {
          Date: '2010-08',
          income: 1856,
        },
        {
          Date: '2010-09',
          income: 2107,
        },
        {
          Date: '2010-10',
          income: 2140,
        },
        {
          Date: '2010-11',
          income: 2311,
        },
        {
          Date: '2010-12',
          income: 1972,
        },
        {
          Date: '2011-01',
          income: 1760,
        },
        {
          Date: '2011-02',
          income: 1824,
        },
        {
          Date: '2011-03',
          income: 1801,
        },
        {
          Date: '2011-04',
          income: 2001,
        },
        {
          Date: '2011-05',
          income: 1640,
        },
        {
          Date: '2011-06',
          income: 1502,
        },
        {
          Date: '2011-07',
          income: 1621,
        },
        {
          Date: '2011-08',
          income: 1480,
        },
        {
          Date: '2011-09',
          income: 1549,
        },
        {
          Date: '2011-10',
          income: 1390,
        },
        {
          Date: '2011-11',
          income: 1325,
        },
        {
          Date: '2011-12',
          income: 1250,
        },
        {
          Date: '2012-01',
          income: 1394,
        },
        {
          Date: '2012-02',
          income: 1406,
        },
        {
          Date: '2012-03',
          income: 1578,
        },
        {
          Date: '2012-04',
          income: 1465,
        },
      ],
    });
  },
  'GET  /api/getSalesChart': (_: Request, res: Response) => {
    res.send({
      status: '200',
      data: [
        {
          Date: '2010-01',
          income: 1231,
        },
        {
          Date: '2010-02',
          income: 1123,
        },
        {
          Date: '2010-03',
          income: 832,
        },
        {
          Date: '2010-04',
          income: 1818,
        },
        {
          Date: '2010-05',
          income: 589,
        },
        {
          Date: '2010-06',
          income: 1002,
        },
        {
          Date: '2010-07',
          income: 1230,
        },
        {
          Date: '2010-08',
          income: 1400,
        },
        {
          Date: '2010-09',
          income: 2107,
        },
        {
          Date: '2010-10',
          income: 2402,
        },
        {
          Date: '2010-11',
          income: 2311,
        },
        {
          Date: '2010-12',
          income: 1902,
        },
        {
          Date: '2011-01',
          income: 1760,
        },
        {
          Date: '2011-02',
          income: 1824,
        },
        {
          Date: '2011-03',
          income: 1801,
        },
        {
          Date: '2011-04',
          income: 2001,
        },
        {
          Date: '2011-05',
          income: 1509,
        },
        {
          Date: '2011-06',
          income: 1422,
        },
        {
          Date: '2011-07',
          income: 1621,
        },
        {
          Date: '2011-08',
          income: 1480,
        },
        {
          Date: '2011-09',
          income: 1549,
        },
        {
          Date: '2011-10',
          income: 1390,
        },
        {
          Date: '2011-11',
          income: 1325,
        },
        {
          Date: '2011-12',
          income: 1250,
        },
        {
          Date: '2012-01',
          income: 1394,
        },
        {
          Date: '2012-02',
          income: 1406,
        },
        {
          Date: '2012-03',
          income: 1578,
        },
        {
          Date: '2012-04',
          income: 1465,
        },
      ],
    });
  },

  'GET  /api/getOrderColumnChart': (_: Request, res: Response) => {
    res.send({
      status: '200',
      data: [
        {
          name: 'London',
          月份: 'Jan.',
          月均降雨量: 18.9,
        },
        {
          name: 'London',
          月份: 'Feb.',
          月均降雨量: 28.8,
        },
        {
          name: 'London',
          月份: 'Mar.',
          月均降雨量: 39.3,
        },
        {
          name: 'London',
          月份: 'Apr.',
          月均降雨量: 81.4,
        },
        {
          name: 'London',
          月份: 'May',
          月均降雨量: 47,
        },
        {
          name: 'London',
          月份: 'Jun.',
          月均降雨量: 20.3,
        },
        {
          name: 'London',
          月份: 'Jul.',
          月均降雨量: 24,
        },
        {
          name: 'London',
          月份: 'Aug.',
          月均降雨量: 35.6,
        },
        {
          name: 'Berlin',
          月份: 'Jan.',
          月均降雨量: 12.4,
        },
        {
          name: 'Berlin',
          月份: 'Feb.',
          月均降雨量: 23.2,
        },
        {
          name: 'Berlin',
          月份: 'Mar.',
          月均降雨量: 34.5,
        },
        {
          name: 'Berlin',
          月份: 'Apr.',
          月均降雨量: 99.7,
        },
        {
          name: 'Berlin',
          月份: 'May',
          月均降雨量: 52.6,
        },
        {
          name: 'Berlin',
          月份: 'Jun.',
          月均降雨量: 35.5,
        },
        {
          name: 'Berlin',
          月份: 'Jul.',
          月均降雨量: 37.4,
        },
        {
          name: 'Berlin',
          月份: 'Aug.',
          月均降雨量: 42.4,
        },
      ],
    });
  },
};
