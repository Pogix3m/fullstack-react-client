import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestRecentRecipe } from '../../modules/recipe/action';

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestRecentRecipe,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);

