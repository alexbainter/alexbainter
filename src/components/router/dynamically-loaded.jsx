import React, { Component } from 'react';

const dynamicallyLoaded = componentModulePromise =>
  class DynamicallyLoadedComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      componentModulePromise.then(componentModule =>
        this.setState({ LoadedComponent: componentModule.default })
      );
    }

    render() {
      const { LoadedComponent } = this.state;
      return LoadedComponent ? <LoadedComponent /> : <div>...</div>;
    }
  };

export default dynamicallyLoaded;
