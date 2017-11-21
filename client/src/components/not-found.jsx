import React from 'react';
import { Link } from 'react-router';

const NotFound = () => (
  <div>
    <h3>You seem lost...</h3>
    Why don't you head on over to the <Link to="/">home page</Link>?
  </div>
);

export { NotFound };