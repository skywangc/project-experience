/**
 * @author Sky
 *  2021/3/31
 */

import React from 'react';
import styles from './index.less';
import { Descriptions, Divider, Typography } from 'antd';

const { Title, Text } = Typography;

interface PropsType {

}

const index: React.FC<PropsType> = (props) => {

  return (
    <div className={styles.ulContent}>
      <div className={styles.detail}>
        <ul>
          <div className={styles.info} id='basicInformation' />
          <li>
            <Descriptions column={2} size='small' title='基本信息'>
              <Descriptions.Item label='姓名'>王超伟</Descriptions.Item>
              <Descriptions.Item label='出生年月'>1995.01</Descriptions.Item>
              <Descriptions.Item label='民族'>汉</Descriptions.Item>
              <Descriptions.Item label='婚&emsp;&emsp;姻'>未婚</Descriptions.Item>
              <Descriptions.Item label='电话'>13007640364</Descriptions.Item>
              <Descriptions.Item label='毕业院校'>洛阳理工学院（18界 本科）</Descriptions.Item>
              <Descriptions.Item label='邮箱'>wangchaoweisky@hotmail.com</Descriptions.Item>
              <Descriptions.Item label='专&emsp;&emsp;业'>计算机科学与技术</Descriptions.Item>
              <Descriptions.Item label='住址'>上海市 浦东新区 灵岩南路（暂住）</Descriptions.Item>
            </Descriptions>
          </li>
          <div className={styles.info} id='specialty' />
          <li>
            <Descriptions colon={false} column={1} size='small' title='专业技能'>
              <Descriptions.Item label='1. '>熟练使 HTML + CSS 编写 web 页面。</Descriptions.Item>
              <Descriptions.Item label='2. '>熟练掌握 JavaScript 及 ES6 语法。</Descriptions.Item>
              <Descriptions.Item label='3. '>熟练掌握 TypeSctript 语法。</Descriptions.Item>
              <Descriptions.Item label='4. '>精通 React 框架，熟练使用 Redux 状态管理。</Descriptions.Item>
              <Descriptions.Item label='5. '>有丰富的 Antd + Umi + Dva 开发经验。</Descriptions.Item>
              <Descriptions.Item label='6. '>熟悉基本的 Webpack 构建配置。</Descriptions.Item>
              <Descriptions.Item label='7. '>熟悉 Nodejs，并使用 Nodejs 开发过 cli 工具。</Descriptions.Item>
              <Descriptions.Item label='8. '>熟练使用 Git 进行代码协作。</Descriptions.Item>
              <Descriptions.Item label='9. '>熟悉 php 后端语言、Mysql 数据库，开发过后端项目。</Descriptions.Item>
              <Descriptions.Item label='10. '>熟悉基本的 Nginx 服务器配置。</Descriptions.Item>
            </Descriptions>
          </li>
          <div className={styles.info} id='projectExperience' />
          <li>
            <div className={styles.project}>
              <Title level={5}>项目经历</Title>
              <Text type='secondary' className={styles.textTitle}>
                <div>2018.05-至今</div>
                <div>洛阳朝霞文化股份有限公司</div>
                <div>web 前端开发</div>
              </Text>
              <Divider style={{ margin: '10px 0' }} />
              <div className={styles.info} id='management' />
              <div className={styles.projectItem}>
                <span>OA管理系统</span>
                <p> 公司内部使用的 OA 系统，包括公司内部运营系统、人员信息管理系统、财务管理系统，图库、题库、云报
                  货等项目管理系统、日常行政考勤、绩效管理及文化展示系统等。</p>
                <div className={styles.workContent}>
                  <span>工作内容：</span>
                  <Descriptions colon={false} column={1} size='small'>
                    <Descriptions.Item label='1. '>使用 React + Umi + Antd + TypeSctript 的技术框架搭建项目。</Descriptions.Item>
                    <Descriptions.Item label='2. '>编码实现大部分功能模块。</Descriptions.Item>
                    <Descriptions.Item label='3. '>打包、部署项目到线上 Nginx 服务器。</Descriptions.Item>
                  </Descriptions>
                </div>
              </div>
              <Divider style={{ margin: '10px 0' }} />
              <div className={styles.info} id='declareGoods' />
              <div className={styles.projectItem}>
                <span>云报货系统</span>
                <p>客户在线报货平台，客户端提供 H5 应用，给客户提供在线报货、在线核对报货单、在线确认应付款、在线
                  签名等功能。</p>
                <div className={styles.workContent}>
                  <span>工作内容：</span>
                  <Descriptions colon={false} column={1} size='small'>
                    <Descriptions.Item label='1. '>分析客户端需求，选择技术栈（React + Umi + Antd-mobile +
                      TypeSctript）。</Descriptions.Item>
                    <Descriptions.Item label='2. '>搭建客户端 H5 项目。</Descriptions.Item>
                    <Descriptions.Item label='3. '>客户端首页、商品筛选页、底部导航栏等模块编写。</Descriptions.Item>
                    <Descriptions.Item label='4. '>给不同浏览器及部分机型做显示适配。</Descriptions.Item>
                    <Descriptions.Item label='5. '>后台管理系统的订单管理模块的前后端实现，使用 php 的 MVC 框架。</Descriptions.Item>
                  </Descriptions>
                </div>
              </div>
              <Divider style={{ margin: '10px 0' }} />
              <div className={styles.info} id='configForm' />
              <div className={styles.projectItem}>
                <span>ConfigForm 表单组件</span>
                <p>基于 antd 开发的高级表单组件，添加了一些快捷语法，给组件传入约定格式的数据，就可
                  以快速生成表单。适用于多表单、动态表单页面，让开发者摆脱大量的 jsx 代码，只需要关注数据结构
                  就可以轻松完成编写表单任务。</p>
              </div>
              <Divider style={{ margin: '10px 0' }} />
              <div className={styles.info} id='pack' />
              <div className={styles.projectItem}>
                <span>pack-cli工具</span>
                <p>基于 Nodejs 的命令行工具，用来管理团队的前端项目，提供代码拉取、打包、上线发布等
                  快捷指令，方便团队小伙伴写完代码后可以快速将代码部署到测试和生产服务器上。</p>
              </div>
              <Divider style={{ margin: '10px 0' }} />
              <div className={styles.info} id='questionBank' />
              <div className={styles.projectItem}>
                <span>朝霞题库</span>
                <p>将公司多年积累及购买的优秀试题、试卷、答案、解析，整合到统一的平台，形成便于查找和使用的内
                  部精品资源库。支持在线组合试卷，在线导出 word、pdf 格式文件。给试题研发中心的小伙伴提供丰富
                  的知识资源，便于他们提升研发试卷的效率。</p>
                <div className={styles.workContent}>
                  <span>工作内容：</span>
                  <p>
                    参与项目的需求分析，使用 php 的 MVC 框架 + Bootstrap + jq，实现试题录入、在线组卷、在线导出、
                    购物车、个人中心等模块的前后端编写。根据用户反馈，优化和完善系统功能。
                  </p>
                </div>
              </div>
            </div>
          </li>
          <div className={styles.info} id='selfEvaluate' />
          <li>
            <Title level={5}>自我评价</Title>
            <p>三年 web 开发经验。有丰富的前端项目搭建、开发、部署经验。善于在项目中抽象代码，提炼可复用的组件。注重用户体验，会主动体验项目，并在体验中思考优化。爱好技术，喜欢学习新知识、尝试
              新技术，并将其适当的应用在项目中。励志在未来成长为一名有所成就 web 工程师。</p>
          </li>
        </ul>
      </div>
      <div className={styles.menu}>
        <nav>
          <ul>
            <li><a href='#basicInformation'>基本信息</a></li>
            <li><a href='#specialty'>专业技能</a></li>
            <li>
              <a href='#projectExperience'>项目经历</a>
              <ul>
                <li><a href='#management'>OA管理系统</a></li>
                <li><a href='#declareGoods'>云报货系统</a></li>
                <li><a href='#configForm'>ConfigForm 表单组件</a></li>
                <li><a href='#pack'>pack-cli工具</a></li>
                <li><a href='#questionBank'>朝霞题库</a></li>
              </ul>
            </li>
            <li><a href='#selfEvaluate'>自我评价</a></li>
          </ul>
        </nav>

      </div>
    </div>
  );
};

export default index;
