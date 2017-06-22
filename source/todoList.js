/**
 * @file todo-app todoList.js
 * @author yunxiange@gmail.com
 */
import React from 'react';
import TodoItems from './todoItems';
import TodoInput from './todoInput';

export default class TodoList extends React.Component {
	static propTypes = {
		todos: React.PropTypes.array
	};

	constructor(props) {
		super(props);

		this.state = {todos: this.props.todos || []};
	}

	addTodo(item) {
		this.setState({
			todos: this.state.todos.concat([item])
		});
	}

	render() {
		return (
			<div>
				<h3>TODO List</h3>
				<TodoItems items={this.state.todos}></TodoItems>
				<TodoInput addTodo={this.addTodo.bind(this)}></TodoInput>
			</div>
		);
	}
}