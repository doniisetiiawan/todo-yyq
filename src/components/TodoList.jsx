import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

export default class TodoList extends PureComponent {
  static propTypes = {
    activeFilter: PropTypes.string.isRequired,
    todoList: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  filterTodoList() {
    const { activeFilter, todoList } = this.props;
    switch (activeFilter) {
      case 'completed':
        return todoList.filter((todo) => todo.get('isCompleted'));
      case 'active':
        return todoList.filterNot((todo) => todo.get('isCompleted'));
      default:
        return todoList;
    }
  }

  render() {
    const todoList = this.filterTodoList();
    const { dispatch } = this.props;
    return (
      <div>
        {!!todoList.size && (
          <ul className="list-group">
            {todoList.map((todo) => (
              <Todo key={todo.get('id')} dispatch={dispatch} todo={todo} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}
