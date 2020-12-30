import React, { Component } from "react";
import Youtube from "react-youtube";

class Youtubes extends Component {
  videOnReady(event) {
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: "390",
      width: "550",
      playerVars: {
        autoplay: 1,
      },
    };
    const { videoId } = this.props;
    return (
      <Youtube videoId={videoId} opts={opts} onReady={this.videoOnReady} />
    );
  }
}

export default Youtubes;
