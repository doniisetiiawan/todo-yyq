import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { completeTodo, deleteTodo } from '../actions/todos';

export default class Todo extends PureComponent {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    const { todo, dispatch } = this.props;
    const { id, text, isCompleted } = todo.toObject();
    const classNames = cn('todo', {
      completed: isCompleted,
    });
    return (
      <li className="list-group-item">
        <span
          className={classNames}
          onClick={() => dispatch(completeTodo(id))}
        >
          {text}
        </span>
        <div
          className="close"
          onClick={() => dispatch(deleteTodo(id))}
        >
          &times;
        </div>
      </li>
    );
  }
}
