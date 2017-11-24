import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import {browserHistory} from 'react-router';

class RecipeCard extends Component {

  render() {
    const {recipe} = this.props;

    return (
      <Card
        centered={true}
        image={recipe.imageUrl}
        header={recipe.name}
        meta="Description"
        description={recipe.description ? recipe.description.substring(0,100) + '...' : ''}
        onClick={() => { browserHistory.push(`/view/${recipe._id}`)}}
      />
    );
  }
}

export default RecipeCard;