import React, { Component } from 'react';
import 'styles/_mute-unmute-button.scss';

const MuteUnmuteButton = ({ muted, onMuteClick }) => (
  <div>
    <button
      className="mute-unmute-button"
      type="button"
      onClick={() => onMuteClick(muted)}
    >
      <i className={`fa fa-volume-off ${muted ? '' : 'icon--active'}`} /> /{' '}
      <i className={`fa fa-volume-up ${muted ? 'icon--active' : ''}`} />
    </button>
  </div>
);

export default MuteUnmuteButton;
