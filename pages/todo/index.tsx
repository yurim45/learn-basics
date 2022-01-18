import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import Task from '@components/Task';
import { Button } from '@components/Button';
import { flexSet } from '@common/styles/variable';
import { todoListState, TodoTypes } from '@common/data/todo';
import TodoItemCreator from './TodoItemCreator';
import styled from 'styled-components';

const Todo: NextPage = (): JSX.Element => {
  const router = useRouter();
  const [todos, setTodos] = useRecoilState<TodoTypes[]>(todoListState);
  const todoList = useRecoilValue<TodoTypes[]>(todoListState);

  const deleteItem = (id: number) => {
    setTodos(todos.filter((todo: TodoTypes) => todo.id !== id));
  };

  const onArchiveTask = (): void => {
    alert('준비중');
  };

  return (
    <TodoWrap>
      <div className='buttonWrap'>
        <Button
          label={'create'}
          onClick={() => router.push('/todo/TodoItemCreator')}
        />
        <Button label={'delete'} />
      </div>
      {todoList.map((todoItem) => (
        <Task
          key={todoItem.id}
          task={todoItem}
          onArchiveTask={onArchiveTask}
          deleteItem={deleteItem}
        />
      ))}
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />
    </TodoWrap>
  );
};

export default Todo;

const TodoWrap = styled.section`
  .buttonWrap {
    margin-bottom: 20px;
    ${flexSet('space-between', 'center')};
  }
`;
