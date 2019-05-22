import React, { Component } from 'react';
import { Content } from 'native-base';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

class TodoContent extends Component {
	filterTodos() {

	}

	render() {
		const todos = this.props.todos;

		return (
			<Content padder>
				{todos.map((todo, index) => {
					return <TodoItem key={index} {...todo} />
				})}
			</Content>
		);
	}
}

const getTodosBySegment = (todos, todoSegment) => {
	switch (todoSegment) {
		case 'TODO_SEGMENT_ALL':
			return todos;
		case 'TODO_SEGMENT_TODO':
			return todos.filter(t => !t.is_completed);
		case 'TODO_SEGMENT_DONE':
			return todos.filter(t => t.is_completed);
		default:
			break;
	}
}

const mapStateToProps = (state) => {
	return {
		todos: getTodosBySegment(state.todos, state.todoSegment)
	};
}

export default connect(mapStateToProps)(TodoContent);