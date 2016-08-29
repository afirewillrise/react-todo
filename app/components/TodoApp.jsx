var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: "Walk the talk"
        },
        {
          id: 2,
          text: 'Be thoughtful'
        },
        {
          id: 3,
          text: 'Finish This'
        },
        {
          id: 4,
          text: 'COMMONNN!'
        }
      ]
    }
  },
  handleAddTodo: function(text) {
    alert(text);
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
