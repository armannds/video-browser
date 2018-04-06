import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li
      onClick={() => onVideoSelect(video)}
      onKeyPress={() => { }}
      role="presentation"
      className="list-group-item"
    >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} alt="Oops! no thumbnail :S" />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

VideoListItem.propTypes = {
  video: PropTypes.shape({
    snippet: PropTypes.shape({
      thumbnails: PropTypes.shape({
        default: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onVideoSelect: PropTypes.func.isRequired,
};

export default VideoListItem;
