var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New State ', store.getState());
});

store.dispatch(actions.addTodo('Clean shelf'));
store.dispatch(actions.setSearchText('shelf'));
store.dispatch(actions.toggleShowCompleted());

//Loading foundation
$(document).foundation();

//Load css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
