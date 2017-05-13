import { connect } from 'react-redux';

import { selD } from 'js/business/ui/selectors';
import Component from './component';

const mapStateToProps = state => ({
  d: selD(state),
});

export default connect(mapStateToProps, null)(Component);
