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
        text: 'Walk the dog'
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo completed state', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      };

      var action2 = {
        type: 'TOGGLE_TODO',
        id: 2
      };

      var todos = [
        {
          id: 1,
          text: "Walk the dog",
          completed: false,
          createdAt: 32843824,
          completedAt: undefined
        },
        {
          id: 2,
          text: "Talk to the dog",
          completed: true,
          createdAt: 32843824,
          completedAt: 32843825
        }
      ];

      var res = reducers.todosReducer(df(todos),df(action));

      expect(res[0].completed).toBe(true);
      expect(res[0].completedAt).toBeA('number');

      var res = reducers.todosReducer(df(todos),df(action2));

      expect(res[1].completed).toBe(false);
      expect(res[1].completedAt).toBeA('undefined');
    });
  });
});
