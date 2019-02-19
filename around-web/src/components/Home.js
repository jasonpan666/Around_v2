import React from 'react';
import { Tabs, Button, Spin } from 'antd';
import { GEO_OPTIONS, POS_KEY, API_ROOT, AUTH_HEADER, TOKEN_KEY } from '../constants';

const TabPane = Tabs.TabPane;

export class Home extends React.Component {
  // get user location           > ERROR
  // (isLoadingGeoLocation: false)
  //           V
  // waiting for user location   > ERROR
  // (isLoadingGeoLocation: true)
  //           V
  // browser return user location
  // (isLoadingGeoLocation: false)
  //           V
  // hit API
  // (isLoadingPosts: false)
  //           V
  // waiting for API response
  // (isLoadingPosts: true)
  //           V
  // return API response
  // (isLoadingPosts: false)

  state = {
    isLoadingGeoLocation: false,
    error: '',
    isLoadingPosts: false,
    posts: []
  }

  componentDidMount() {
    if ('geolocation' in navigator) {
      this.setState({
        isLoadingGeoLocation: true,
        error: ''
      });
      navigator.geolocation.getCurrentPosition(
        this.onSuccessLoadGeoLocation,
        this.onFailedLoadGeoLocation,
        GEO_OPTIONS
      );
    } else {
      this.setState({error: 'Geolocation is not supported.'});
    }
  }

  onSuccessLoadGeoLocation = (position) => {
    const { latitude, longitude } = position.coords;
    localStorage.setItem(POS_KEY, JSON.stringify({
      lat: latitude,
      lon: longitude
    }));
    this.setState({
      isLoadingGeoLocation: false,
      error:''
    });
  }

  onFailedLoadGeoLocation = (error) => {
    this.setState({
      isLoadingGeoLocation: false,
      error: 'Failed to load geolocation: ' + error.message
    });
  }

  loadNearbyPosts = () => {
    const { lat, lon } = JSON.parse(localStorage.getItem(POS_KEY));
    const token = localStorage.getItem(TOKEN_KEY);
    this.setState({ isLoadingPosts: true, error: '' });
    fetch(`${API_ROOT}/search?lat=${lat}&lon=${lon}&range=20000`, {
      method: 'GET',
      headers: {
        Authorization: `${AUTH_HEADER} ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to load posts.');
    }).then((data) => {
      console.log(data);
      this.setState({ isLoadingPosts: false, posts: data ? data : [] });
    }).catch((e) => {
      console.log(e.message);
      this.setState({ isLoadingPosts: false, error: e.message });
    });
  }

  getImagePost = () => {
    const { error, isLoadingGeoLocation } = this.state;
    if (error) {
      return <div>{error}</div>;
    } else if (isLoadingGeoLocation) {
      return <Spin tip="Loading geolocation..."/>;
    } else {
      return <div>Nothing to show</div>
    }
  }

  render() {
    const operations = <Button type="primary">Create New Post</Button>;

    return (
      <Tabs className="main-tabs" tabBarExtraContent={operations}>
        <TabPane tab="Image Posts" key="1">
          {this.getImagePost()}
        </TabPane>
        <TabPane tab="Video Posts" key="2">Content of tab 2</TabPane>
        <TabPane tab="Map" key="3">Content of tab 3</TabPane>
      </Tabs>
    );
  }
}