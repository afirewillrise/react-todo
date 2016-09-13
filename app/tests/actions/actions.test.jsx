import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var expect = require('expect');
import firebase, {firebaseRef} from 'app/firebase/';
import * as actions from 'actions';

var createMockStore = configureMockStore([thunk]);


describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some text'
    };

    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: 'afa23',
        completed: false,
        text: 'Mehhhhh',
        createdAt: 2432422
      }
    };

    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create todo and dispatch add todo action', (done) => {
    const store = createMockStore({});
    const todoText = 'My todo';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });

  it('should generate add todos action', () => {
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

    var res = actions.addTodos(action.todos);

    expect(res).toEqual(action);
  });

  it('should generate update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: 4,
      updates: {
        completed: true,
        completedAt: 32425234
      }
    };

    var res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  describe('Tests with Firebase todos', () => {
    var testTodoRef;

    beforeEach((done) => {
      testTodoRef = firebaseRef.child('todos').push();

      testTodoRef.set({
        text: 'some test text todo',
        completed: false,
        createdAt: 13434
      }).then(() => done());
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions;

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done());
    });
  });
});
