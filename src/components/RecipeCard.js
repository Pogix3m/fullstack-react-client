import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';

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
      />
    );
  }
}

export default RecipeCard;