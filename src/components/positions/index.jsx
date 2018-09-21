import React from 'react';
import sortBy from 'lodash/sortBy';
import positions from 'data/positions';
import Position from './position';

const sortedPositions = sortBy(positions, ['startDate']).reverse();

const Positions = () => (
  <div>
    {sortedPositions.map(position => (
      <Position key={position._id} {...position} />
    ))}
  </div>
);

export default Positions;
