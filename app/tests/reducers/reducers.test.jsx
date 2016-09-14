var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Dog'
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todos', () => {
      var action = {
        type: 'ADD_TODO',
        todo:
        {
          id: 'afaf3232',
          text: 'sample todo',
          completed: false,
          createdAt: 14342324
        }
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should add existing todos', () => {
      var action = {
        type: 'ADD_TODOS',
        todos: [
          {
            id: 1,
            text: 'Sample',
            completed: false,
            completedAt: undefined,
            createdAt: 4542523
          }
        ]
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todos[0]);
    });

    it('should wipe todos on logout', () => {
      var action = {
        type: 'LOGOUT',
        todos: [
          {
            id: 1,
            text: 'Sample',
            completed: false,
            completedAt: undefined,
            createdAt: 4542523
          }
        ]
      };

      var res = reducers.todosReducer(df(action.todos), df(action));

      expect(res.length).toEqual(0);
    });

    it('should update todo', () => {
      var todos = [
        {
          id: '4ggf',
          text: "Walk the dog",
          completed: true,
          createdAt: 32843824,
          completedAt: 1313134
        }
      ];

      var updates = {
        completed: false,
        completedAt: null
      }

      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      var res = reducers.todosReducer(df(todos),df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);

    });
  });

  describe('authReducer', () => {
    it('should store uid on Login', () => {
      const action = {
        type: 'LOGIN',
        uid: 'ac2131'
      };

      var res = reducers.authReducer(undefined, df(action));

      expect(res).toEqual({
        uid: action.uid
      });
    });

    it('should wipre uid on logout', () => {
      const authData = {
        uid: 'gsdfs23'
      };

      const action = {
        type: 'LOGOUT'
      };

      var res = reducers.authReducer(df(authData), df(action));

      expect(res).toEqual({});
    });
  });
});
