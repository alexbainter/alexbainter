import React, { Component } from 'react';
import Tone from 'tone';
import { faVolumeOff, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import time from '@generative-music/time-tonejs';
import makeInstrument from '@generative-music/instrument-tonejs';
import aisatsana from '@generative-music/piece-aisatsana';
import enoMachine from '@generative-music/piece-eno-machine';
import sevenths from '@generative-music/piece-sevenths';
import pinwheels from '@generative-music/piece-pinwheels';
import startAudioContext from 'startaudiocontext';
import samples from 'samples/samples.json';
import 'styles/_mute-unmute-button.scss';

const pianoSamples = samples['vsco2-piano-mf'];
const className = 'mute-unmute-button';
const pieces = [aisatsana, enoMachine, sevenths, pinwheels];

const pianoSamplerConfigPromise = Promise.all(
  Reflect.ownKeys(pianoSamples).map(
    note =>
      new Promise(resolve => {
        const buffer = new Tone.Buffer({
          url: pianoSamples[note],
          onload: () => resolve({ note, buffer }),
        });
      })
  )
).then(notes =>
  notes.reduce((config, { note, buffer }) => {
    config[note] = buffer;
    return config;
  }, {})
);

class MuteUnmuteButton extends Component {
  constructor(props) {
    super(props);
    this.volumes = [];
    pianoSamplerConfigPromise.then(samplerConfig => {
      this.volumes = pieces.map(piece => {
        const volume = new Tone.Volume({ volume: -100, mute: true }).toMaster();
        const piano = new Tone.Sampler(samplerConfig).connect(volume);
        const instruments = [makeInstrument({ toneInstrument: piano })];
        piece({ instruments, time });
        return volume;
      });
      this.setState({ ready: true });
    });
    startAudioContext(Tone.context, `.${className}`).then(() => {
      Tone.Transport.start();
    });
    this.state = { ready: false, muted: true };
    this.handleMuteClick = this.handleMuteClick.bind(this);
  }
  render() {
    return (
      this.state.ready && (
        <div>
          <button
            className={className}
            type="button"
            onClick={this.handleMuteClick}
          >
            <FontAwesomeIcon
              icon={faVolumeOff}
              className={this.state.muted ? '' : 'icon--active'}
            />{' '}
            /{' '}
            <FontAwesomeIcon
              icon={faVolumeUp}
              className={this.state.muted ? 'icon--active' : ''}
            />
          </button>
        </div>
      )
    );
  }
  handleMuteClick() {
    if (!this.state.muted) {
      this.state.volume.volume.linearRampTo(-100, 1);
    } else {
      const volume = this.volumes[
        Math.floor(Math.random() * this.volumes.length)
      ];
      volume.volume.linearRampTo(0, 1);
      this.setState({ volume });
    }
    this.setState({ muted: !this.state.muted });
  }
}

export default MuteUnmuteButton;
