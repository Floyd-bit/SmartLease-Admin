/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-05 17:23:57
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-09 20:51:12
 */
import { Button, Result } from 'antd';
import type { IRouteProps } from 'umi';
import { FormattedMessage, Link } from 'umi';
import React from 'react';

import styles from './style.less';

const actions = (
  <div className={styles.actions}>
    <a href="">
      <Button size="large" type="primary">
        <FormattedMessage id="userregisterresult.register-result.view-mailbox" />
      </Button>
    </a>
    <Link to="/">
      <Button size="large">
        <FormattedMessage id="userregisterresult.register-result.back-home" />
      </Button>
    </Link>
  </div>
);

const UserRegisterResult: React.FC<IRouteProps> = ({ location }) => (
  <Result
    className={styles.registerResult}
    status="success"
    title={
      <div className={styles.title}>
        <FormattedMessage
          id="userregisterresult.register-result.msg"
          values={{ email: location.state ? location.state.account : 'AntDesign@example.com' }}
        />
      </div>
    }
    subTitle={<FormattedMessage id="userregisterresult.register-result.activation-email" />}
    extra={actions}
  />
);

export default UserRegisterResult;
