import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { addRecipe } from '../../modules/recipe/action';

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addRecipe,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);

