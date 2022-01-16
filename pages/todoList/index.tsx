import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '@common/data/todo';
import type { NextPage } from 'next';
import TodoItemCreator from './TodoItemCreator';

const TodoList: NextPage = (): JSX.Element => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator todoListState={todoListState} />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
