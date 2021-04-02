import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import styles from './index.less';

export default class Test extends React.Component {
  state = {
    show: true,
    items: [
      <li key='0'></li>,
      <li key='1'></li>,
      <li key='2'></li>,
    ],
  };
  onClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  onAdd = () => {
    let items = this.state.items;
    items.push(<li key={Date.now()}></li>);
    this.setState({
      show: true,
      items,
    });
  };
  onRemove = () => {
    let items = this.state.items;
    items.splice(items.length - 1, 1);
    this.setState({
      show: true,
      items,
    });
  };

  render() {
    return (
      <div className={styles.queueDemo}>
        <div style={{width: '50%'}}>
          <p className="buttons">
            <Button type="primary" onClick={this.onClick}>Switch</Button>
            <Button onClick={this.onAdd} style={{ marginLeft: 10 }}>Add</Button>
            <Button onClick={this.onRemove} style={{ marginLeft: 10 }}>Remove</Button>
          </p>
          <div className={styles.demoContent}>
            <div className={styles.demoThead} key='a'>
              <ul>
                <li />
                <li />
                <li />
              </ul>
            </div>
            <div className={styles.demoTbody} key="b">
              <QueueAnim component="ul" type={['right', 'left']} leaveReverse>
                {this.state.show ? this.state.items : null}
              </QueueAnim>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
