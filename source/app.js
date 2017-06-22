/**
 * @file todo-app app.js
 * @author yunxiange@gmail.com
 */
import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './todoList';

ReactDom.render(
	<TodoList todos={['react-starter', 'angular-starter', 'vue-starter']}/>,
	document.getElementById('container')
);
