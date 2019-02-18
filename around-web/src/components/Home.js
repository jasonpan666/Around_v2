import React from 'react';
import { Tabs, Button } from 'antd';

const TabPane = Tabs.TabPane;

export class Home extends React.Component {
  render() {
    const operations = <Button type="primary">Create New Post</Button>;

    return (
      <Tabs className="main-tabs" tabBarExtraContent={operations}>
        <TabPane tab="Image Posts" key="1">
          <div>
            <h1>hello world</h1>
          </div>
        </TabPane>
        <TabPane tab="Video Posts" key="2">Content of tab 2</TabPane>
        <TabPane tab="Map" key="3">Content of tab 3</TabPane>
      </Tabs>
    );
  }
}