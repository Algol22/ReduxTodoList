 // actionTypes.ts
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: {
    text: string;
  };
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: {
    id: number;
  };
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: {
    id: number;
  };
}

export type ActionTypes = AddTodoAction | ToggleTodoAction | DeleteTodoAction;
