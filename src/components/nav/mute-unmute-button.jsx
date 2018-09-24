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
import withRouter from 'react-router/withRouter';

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

let volumes = [];

class MuteUnmuteButton extends Component {
  constructor(props) {
    super(props);
    volumes = [];
    pianoSamplerConfigPromise.then(samplerConfig => {
      volumes = pieces.map(piece => {
        const volume = new Tone.Volume({ volume: -100, mute: true }).toMaster();
        const piano = new Tone.Sampler(samplerConfig).connect(volume);
        const instruments = [makeInstrument({ toneInstrument: piano })];
        piece({ instruments, time });
        return volume;
      });
      const unassignedVolumes = [...volumes];
      const pathVolumes = new Map();
      const assignVolumeForPath = pathname => {
        const index = Math.floor(Math.random() * unassignedVolumes.length);
        const volume = unassignedVolumes[index];
        unassignedVolumes.splice(index, 1);
        pathVolumes.set(pathname, volume);
        return volume;
      };
      props.history.listen(({ pathname }) => {
        let volume;
        if (pathVolumes.has(pathname)) {
          volume = pathVolumes.get(pathname);
        } else {
          volume = assignVolumeForPath(pathname);
        }
        this.setState({ volume }, () => this.setVolumeLevels());
      });
      this.setState({
        ready: true,
        volume: assignVolumeForPath(props.location.pathname),
      });
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
    this.setState({ muted: !this.state.muted }, () => this.setVolumeLevels());
  }
  setVolumeLevels() {
    let volumesToMute;
    if (this.state.muted) {
      volumesToMute = volumes;
    } else {
      volumesToMute = volumes.filter(volume => volume !== this.state.volume);
      this.state.volume.volume.linearRampTo(0, 1);
    }
    volumesToMute.forEach(volume => volume.volume.linearRampTo(-100, 1));
  }
}

export default withRouter(MuteUnmuteButton);
