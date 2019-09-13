import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addTodo } from '../actions/todos';

export default class AddTodo extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.todoRef = React.createRef();
  }

  shouldComponentUpdate() {
    return false;
  }

  addTodo(e) {
    e.preventDefault();
    const input = this.todoRef.current;
    const value = input.value.trim();
    if (value) {
      const { dispatch } = this.props;
      dispatch(addTodo(value));
      input.value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.addTodo(e)}>
          <input
            className="form-control"
            type="text"
            placeholder="Enter ToDo"
            ref={this.todoRef}
          />
        </form>
        <br />
      </div>
    );
  }
}
