import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { changeFilter, deleteAllTodos } from '../actions/todos';

export default class Footer extends PureComponent {
  static propTypes = {
    activeFilter: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  filters = ['all', 'completed', 'active'];

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <div className="btn-group">
          {this.filters.map((filter) => {
            const { activeFilter } = this.props;
            const className = cn('btn btn-default capitalize', {
              active: activeFilter === filter,
            });
            return (
              <button
                key={filter}
                className={className}
                onClick={() => dispatch(changeFilter(filter))}
                type="button"
              >
                {filter}
              </button>
            );
          })}
        </div>
        <div className="pull-right">
          <button
            className="btn btn-danger"
            onClick={() => dispatch(deleteAllTodos())}
            type="button"
          >
            Delete all
          </button>
        </div>
      </div>
    );
  }
}
