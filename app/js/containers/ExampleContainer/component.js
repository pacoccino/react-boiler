import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';
import Input from 'js/components/ui/Input';
import Button from 'js/components/ui/Button';

import styles from './style.scss';

class ExampleContainer extends React.Component {
  render() {
    const {
      d,
      goHome,
      handleSubmit,
      pristine,
      submitting,
    } = this.props;

    return (
      <div className={styles.container}>
        {d}
        <Button onClick={goHome} label="Go Home" />
        <form onSubmit={handleSubmit}>
          <Field
            name="d"
            component={Input}
            type="text"
            label="Input"
          />
          <Button onClick={handleSubmit} disabled={pristine || submitting} label="Set" />
        </form>
      </div>
    );
  }
}

ExampleContainer.propTypes = {
  d: PropTypes.object,
  goHome: PropTypes.bool,
  ...propTypes,
};

export default ExampleContainer;
