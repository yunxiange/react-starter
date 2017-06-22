/**
 * @file todo-app todoItems.js
 * @author yunxiange@gmail.com
 */
import React from 'react';

export default class TodoItems extends React.Component {
	static propTypes = {
		items: React.PropTypes.array
	};

	constructor(props) {
		super(props);		
	}

	render() {
		const createItem = function (item, index) {
			return (
				<li key={index}>{item}</li>
			);
		};
		return <ul>{this.props.items.map(createItem)}</ul>;
	}
}