/*
 * @Description: 
 * @version: 1.0
 * @Author: 范玉琳
 * @Date: 2021-07-06 10:19:08
 * @LastEditors: 范玉琳
 * @LastEditTime: 2021-07-16 10:24:03
 */
import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

type StandardFormRowProps = {
  title?: string;
  last?: boolean;
  block?: boolean;
  grid?: boolean;
  style?: React.CSSProperties;
};

const StandardFormRow: React.FC<StandardFormRowProps> = ({
  title,
  children,
  last,
  block,
  grid,
  ...rest
}) => {
  const cls = classNames(styles.standardFormRow, {
    [styles.standardFormRowBlock]: block,
    [styles.standardFormRowLast]: last,
    [styles.standardFormRowGrid]: grid,
  });

  return (
    <div className={cls} {...rest}>
      {title && (
        <div className={styles.label}>
          <span>{title}</span>
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default StandardFormRow;
