import React from 'react';
import { Card } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

export default ({ recipe }) => (
  <Card
    centered
    image={recipe.imageUrl}
    header={recipe.name}
    meta="Description"
    description={recipe.description ? `${recipe.description.substring(0, 100)}...` : ''}
    onClick={() => { browserHistory.push(`/view/${recipe._id}`); }}
  />
);
