import React from 'react';
import { Card } from 'semantic-ui-react';
import RecipeCard from './RecipeCard';

export default ({ recipes }) => (
  <Card.Group itemsPerRow="5">
    {recipes.map((recipe, i) =>
      <RecipeCard {...this.props} key={i} recipe={recipe} />)}
  </Card.Group>
);
