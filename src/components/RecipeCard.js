import React from 'react';
import { Card } from 'semantic-ui-react';
import { history } from '../store';

export default ({ recipe }) => (
  <Card
    centered
    image={recipe.imageUrl}
    header={recipe.name}
    meta="Description"
    description={recipe.description ? `${recipe.description.substring(0, 100)}...` : ''}
    onClick={() => { history.push(`/view/${recipe._id}`); }}
  />
);
