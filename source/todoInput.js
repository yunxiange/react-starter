/**
 * @file todo-app todoItems.js
 * @author yunxiange@gmail.com
 */
import React from 'react';

export default class TodoItems extends React.Component {
	constructor(props) {
		super(props);

		this.state = {item: ''};
	}

	onChange(e) {
		this.setState({item: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addTodo(this.state.item);
		this.setState({item: ''}, function () {
			this.refs.item.focus();
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" ref="item" onChange={this.onChange.bind(this)} value={this.state.item}/>
				<input type="submit" value="ADD"/>
			</form>
		);
	}it
}
