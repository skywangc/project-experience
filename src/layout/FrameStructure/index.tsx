/**
 * @author Sky
 *  2021/3/31
 */

import React from 'react';
import { BackTop, Layout, Tag } from 'antd';
import styles from './index.less';

const { Header, Content,Footer } = Layout;

interface PropsType {
  children: React.ReactNode
}

const index: React.FC<PropsType> = (props) => {
  const { children } = props;

  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.headerItem}>
          <div><h1>王超伟的个人简历</h1></div>
          <div>
            <Tag color="magenta">web 前端</Tag>
            <Tag color="red">Javascript</Tag>
            <Tag color="volcano">React</Tag>
            <Tag color="orange">Typescript</Tag>
            <Tag color="gold">Antd</Tag>
            <Tag color="lime">Node.js</Tag>
            <Tag color="green">Webpack</Tag>
            <Tag color="cyan">PHP</Tag>
            <Tag color="blue">Mysql</Tag>
            <Tag color="geekblue">Nginx</Tag>
          </div>
        </div>
      </Header>
      <Content className={styles.Content}>
        <div className={styles.ContentItem}>
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default index;
