import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as HomeActions from '../actions/HomeActions';
import styles from '../../styles/app.scss';

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
                {e.map(() => {
                  return (
                    <div className={styles.field}>
                      <div className={styles.borders}></div>
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
};

export default connect(state => state.Sample)(Home);
