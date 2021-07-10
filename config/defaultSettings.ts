/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-05 17:23:57
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-09 20:51:39
 */
import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '租享宝商家版',
  pwa: false,
  iconfontUrl: '',
};

export type { DefaultSettings };

export default proSettings;
