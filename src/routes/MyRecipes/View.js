import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import RecipeCard from '../../components/RecipeCard';

class MyRecipes extends Component {
  constructor(props) {
    super(props);
    this.props.requestMyRecipe(this.props.user.data._id);
  }

  // componentWillMount(){
  //   this.props.requestMyRecipe(this.props.user.data._id);
  // }

  render() {
    return (
      <Card.Group itemsPerRow={5}>
        {this.props.myRecipes.map((recipe, i) => <RecipeCard {...this.props} key={i} recipe={recipe} />)}
      </Card.Group>
    );
  }
}

export default MyRecipes;
