/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-19 09:37:07
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-19 10:01:01
 */
import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, List, Typography } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useRequest } from 'umi';
import { queryFakeList } from './service';
import type { CardListItemDataType } from './data.d';
import styles from './style.less';

const { Paragraph } = Typography;

const StoreList = () => {
  const { data, loading } = useRequest(() => {
    return queryFakeList({
      count: 8,
    });
  });

  const list = data?.list || [];

  const content = (
    <div className={styles.pageHeaderContent}>
      <p>
        管理租享宝平台商铺
      </p>

    </div>
  );

  const extraContent = (
    <div className={styles.extraImg}>
      <img
        alt="这是一个标题"
        src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
      />
    </div>
  );
  const nullData: Partial<CardListItemDataType> = {};
  return (
    <PageContainer content={content} extraContent={extraContent}>
      <div className={styles.cardList}>
        <List<Partial<CardListItemDataType>>
          rowKey="id"
          loading={loading}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={[nullData, ...list]}
          renderItem={(item) => {
            if (item && item.id) {
              return (
                <List.Item key={item.id}>
                  <Card
                    hoverable
                    className={styles.card}
                    actions={[<a key="option1">编辑信息</a>, <a key="option2">删除商铺</a>]}
                  >
                    <Card.Meta
                      avatar={<img alt="" className={styles.cardAvatar} src={item.avatar} />}
                      title={<a>{item.storeName}</a>}
                      description={
                        <Paragraph className={styles.item} ellipsis={{ rows: 3 }}>
                          {item.introduction}
                        </Paragraph>
                      }
                    />
                  </Card>
                </List.Item>
              );
            }
            return (
              <List.Item>
              </List.Item>
            );
          }}
        />
      </div>
    </PageContainer>
  );
};

export default StoreList;
