import React, { Component, PropTypes } from 'react';

// Components
import Row from './Row';


class Game extends Component {
  static propTypes = {
    // rows: PropTypes.number.isRequired,
    // columns: PropTypes.number.isRequired,
  };

  render () {
    return (
      <Row/>
    );
  }
}


export default Game;
