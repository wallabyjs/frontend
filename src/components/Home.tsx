import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
// import { DragSource } from 'react-dnd';
// import {bindActionCreators} from 'redux';
// import * as HomeActions from '../actions/HomeActions';
import styles from '../../styles/app.scss';
import Player, {PlayerPositions} from '../shared/player';

const players = [
  new Player(PlayerPositions.player1, styles.white),
  new Player(PlayerPositions.player2, styles.black),
];

class Home extends Component {
  render() {
    // const {title, dispatch} = this.props;
    // const actions = bindActionCreators(HomeActions, dispatch);
    const tiles = Array.apply(null, {length: 9}).map(() => Array.apply(null, {length: 4}));
    return (
      <main>
        <div className={styles.board}>
          {tiles.map((e, i) => {
            return (
              <div className={`${styles.tile} ${styles.rotate0} ${styles[`type${i}`] || ''}`}>
                {e.map((_j, j) => {
                  return (
                    <div className={styles.field}>
                      <div className={`${styles.player} ${Player.getStyleAtPosition(players, {i, j})}`} />
                      <div className={styles.borders} />
                    </div>
                  );
                })}
              </div>);
          })}
        </div>
      </main>
    );
  }
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
};

export default connect(state => state.Sample)(Home);
