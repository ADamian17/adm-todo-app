import { render, screen, fireEvent, act } from '@testing-library/react';

import { useColumnsStore } from "../../../state/useColumnStore"
import AddTodoForm from '..';

const initialState = useColumnsStore.getState()

describe('AddTodoForm Component', () => {
  beforeEach(() => {
    render(<AddTodoForm />);
  })

  afterEach(() => {
    act(() => {
      useColumnsStore.setState(initialState)
    });
  })

  it('should be in the document', () => {
    expect(screen.getByTestId("add-todo-form")).toBeInTheDocument()
  });

  test('user should be able to type in the text field', () => {
    const textField = screen.getByTestId("add-todo-form-input");
    const value = "adonis"
    fireEvent.change(textField, {
      target: {
        value,
      }
    })

    expect(textField).toHaveValue(value)
  });

  it('should submit todo without error', () => {
    const value = "adonis"

    fireEvent.change(screen.getByTestId("add-todo-form-input"), {
      target: {
        value,
      }
    })
    fireEvent.click(screen.getByTestId("add-todo-form-btn"))

    const todos = useColumnsStore.getState().columns.todo
    const foundTodo = todos.find(item => item.title === value)

    expect(foundTodo).toBeTruthy()
  });

  test('render error msg if text field is empty', () => {
    const submitBtn = screen.getByTestId("add-todo-form-btn");
    fireEvent.click(submitBtn)

    expect(screen.getByTestId("add-todo-form-error-msg")).toBeInTheDocument()
  });
});