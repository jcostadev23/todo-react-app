import React from 'react';
import { render, fireEvent, getByLabelText } from '@testing-library/react';
import ListTodos from './components/TodoList';

describe('ListTodos', () => {
 
  beforeAll(() => {
    const localStorageMock = {
      getItem: jest.fn(() => '[]'),
      setItem: jest.fn(),
    };
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  });

  it('renders "listTodos" title', () => {
    const { getByText } = render(<ListTodos />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('listTodos')).toBeInTheDocument();
  });

  it('displays todos from local storage', () => {
    const todosInStorage = [
      { id: 1, task: 'Task 1', done: false, priority: false },
      { id: 2, task: 'Task 2', done: true, priority: true },
    ];
    window.localStorage.getItem = jest.fn(() => JSON.stringify(todosInStorage));

    const { getByText } = render(<ListTodos />);

    todosInStorage.forEach((todo) => {
      // eslint-disable-next-line no-restricted-globals, testing-library/prefer-screen-queries
      expect(getByText(todo.task)).toBeInTheDocument();
    });
  });

  it('marks todo as done when checkbox is clicked', () => {
    const todosInStorage = [{ id: 1, task: 'Task 1', done: false, priority: false }];
    window.localStorage.getItem = jest.fn(() => JSON.stringify(todosInStorage));

    const { getByText, } = render(<ListTodos />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const checkbox = getByLabelText('Task 1');

    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('Task 1')).toHaveStyle('text-decoration: line-through;');
  });

 
});
