/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-05 17:23:57
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-09 20:51:04
 */
// eslint-disable-next-line import/no-extraneous-dependencies
import type { Request, Response } from 'express';

export default {
  'POST  /api/register': (_: Request, res: Response) => {
    res.send({ status: 'ok', currentAuthority: 'user' });
  },
};
