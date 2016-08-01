import React, { Component, PropTypes } from 'react';

// Components
import Grid from './Grid';


class Row extends Component {
  static propTypes = {
    columns: PropTypes.number,
  };

  render () {
    return (
      <Grid />
    );
  }
}


export default Row;
