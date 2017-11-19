import React     from 'react';
import PropTypes from 'prop-types';
import Ship      from './ship';

const propTypes = {
  player:        PropTypes.object.isRequired,
  angle:         PropTypes.number.isRequired,
  moveDirection: PropTypes.string,
};

class MainShip extends React.Component {
  render() {
    return (
      <Ship
        player={this.props.player}
        angle={this.props.angle}
        moveDirection={this.props.moveDirection}
        launchRocket={this.props.launchRocket}
        style={{
          position:        'fixed',
          top:             'calc(50% - 15px)',
          left:            'calc(50% - 15px)',
          width:           '30px',
          height:          '30px',
          borderRadius:    '15px 15px 0 0',
          backgroundColor: 'green',
          borderBottom:    '5px solid red',
        }}
      />
    )
  }
}

MainShip.propTypes = propTypes;

export default MainShip;
