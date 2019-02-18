import React from 'react';
import { Tabs, Button } from 'antd';
import { GEO_OPTIONS } from '../constants';

const TabPane = Tabs.TabPane;

export class Home extends React.Component {
  componentDidMount() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        this.onSuccessLoadGeoLocation,
        this.onFailedLoadGeoLocation,
        GEO_OPTIONS
      );
    } else {
      // TODO: Error handling
    }
  }

  onSuccessLoadGeoLocation = (position) => {
    console.log('success', position);
  }

  onFailedLoadGeoLocation = (error) => {
    console.log('error', error);
  }

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