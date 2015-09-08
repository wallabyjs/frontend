import * as React from 'react';
const {connect} = require('react-redux');
// import { DragSource } from 'react-dnd';
// import {bindActionCreators} from 'redux';
// import * as HomeActions from '../actions/HomeActions';
const styles = require('../../styles/app.scss');
import Player, {PlayerPositions} from '../shared/player';

const players = [
  new Player(PlayerPositions.player1, styles.white),
  new Player(PlayerPositions.player2, styles.black),
];

interface Props {
  title: string;
  dispatch: Function;
  isDragging: boolean;
  connectDragSource: Function;
}

class Home extends React.Component<Props, {}> {

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

// Home.PropTypes = {
//   title: React.PropTypes.string.isRequired,
//   dispatch: React.PropTypes.func.isRequired,
//   isDragging: React.PropTypes.bool.isRequired,
//   connectDragSource: React.PropTypes.func.isRequired,
// };

export default connect(state => state.Sample)(Home);
