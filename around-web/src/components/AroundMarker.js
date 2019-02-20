import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import blueMarkerUrl from '../assets/images/blue-marker.svg';

export class AroundMarker extends React.Component {
  state = {
    isOpen: false,
  }

  toggleOpen = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen
      }
    });
  }

  render() {
    const { user, message, url, location, type } = this.props.post;
    const { lat, lon : lng } = location;
    const isImagePost = type === 'image';
    const icon = isImagePost ? undefined : {
      url: blueMarkerUrl,
      scaledSize: new window.google.maps.Size(26, 41),
    }
    return (
      <Marker
        position={{ lat, lng }}
        onMouseOver={isImagePost ? this.toggleOpen : undefined}
        onMouseOut={isImagePost ? this.toggleOpen : undefined}
        onClick={isImagePost ? undefined : this.toggleOpen}
        icon={icon}
      >
        {this.state.isOpen ? (
          <InfoWindow onCloseClick={this.toggleOpen}>
            <div>
              {isImagePost ?
                <img src={url} alt={message} className="around-marker-image"/>
                :
                <video src={url} className="around-marker-video" controls/>
              }

              <p>{`${user}: ${message}`}</p>
            </div>
          </InfoWindow>
        ) : null}
      </Marker>
    );
  }
}
