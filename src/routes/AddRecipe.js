import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      ingredients: '',
      description: '',
    };

    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imageUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      name, imageUrl, ingredients, description,
    } = this.state;
    this.props.addRecipe({
      recipe: {
        name,
        imageUrl,
        ingredients: ingredients.split('\n'),
        description,
      },
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Recipe Name</label>
          <input
            value={this.state.name}
            name="name"
            onChange={e => this.setState({ name: e.target.value })}
            placeholder="Recipe name"
          />
        </Form.Field>

        <Form.Field>
          <label>Recipe Image</label>
          <input
            type="file"
            name="name"
            onChange={this.handleImageChange}
          />
        </Form.Field>

        <Form.Field>
          <label>Ingredients (one per line)</label>
          <Form.TextArea
            value={this.state.ingredients}
            name="ingredients"
            onChange={e => this.setState({ ingredients: e.target.value })}
            placeholder="ingredients"
          />
        </Form.Field>

        <Form.Field>
          <label>Description</label>
          <Form.TextArea
            value={this.state.description}
            name="description"
            onChange={e => this.setState({ description: e.target.value })}
            placeholder="description"
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

// function mapStateToProps(state, ownProps) {
//   return {
//     state: state
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);
export default AddRecipe;
