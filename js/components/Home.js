import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../styles/app.scss';

class Home extends Component {
  render() {
    const {title, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    return (
      <main>
        <h1 className={styles.text}>Welcome {title}!</h1>
        <button onClick={() => actions.changeTitle('123')}>
          Update Title
        </button>
      </main>
    );
  }
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => state.Sample)(Home);
