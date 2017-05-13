import React, { PropTypes } from 'react';
import * as routes from 'js/constants/routes';
import { Link } from 'react-router-dom';

import userIcon from 'styles/icons/user-icon.svg';
import styles from './style.scss';

class TopBar extends React.Component {
  render() {
    const {
      d,
    } = this.props;

    return (
      <div>
        <div className={styles.container}>
          <div className={styles.topLeft}>
            {d}
          </div>
          <div>
            <Link to={routes.Root}>
              <span className={styles.centerTitle}>
                Boiler
              </span>
            </Link>
          </div>
          <div className={styles.topRight}>
            <Link to={routes.About}>
              <span className={styles.signin}>About</span>
              <img src={userIcon} className={styles.userIcon} alt="user" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

TopBar.propTypes = {
  d: PropTypes.bool,
};
TopBar.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default TopBar;
