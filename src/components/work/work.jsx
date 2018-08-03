import React, { Component } from 'react';
import { Position } from './position';
import { Project } from './project';

const makePropLengthsAreUnequal = (obj1, obj2) => propName =>
  obj1[propName].length !== obj2[propName].length;

const makeRenderWorkItem = ComponentName => workItem => (
  <ComponentName key={workItem._id} {...workItem} />
);

const renderPosition = makeRenderWorkItem(Position);

const renderProject = makeRenderWorkItem(Project);

class Work extends Component {
  shouldComponentUpdate(nextProps) {
    const propLengthsAreUnequal = makePropLengthsAreUnequal(
      this.props,
      nextProps
    );
    return (
      propLengthsAreUnequal('projects') || propLengthsAreUnequal('positions')
    );
  }

  render() {
    return (
      <div>
        <h2>Positions</h2>
        {this.props.positions.map(renderPosition)}
        <h2>Projects</h2>
        {this.props.projects.map(renderProject)}
      </div>
    );
  }
}

export { Work };
