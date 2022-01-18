import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import Task from '@components/Task';
import { Button } from '@components/Button';
import { flexSet } from '@common/styles/variable';
import { todoListState } from '@common/data/todo';
import TodoItemCreator from './TodoItemCreator';
import styled from 'styled-components';

const Todo: NextPage = (): JSX.Element => {
  const router = useRouter();
  const todoList = useRecoilValue(todoListState);

  const deleteItem = () => {
    alert('삭제기능');
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
        <Task key={todoItem.id} task={todoItem} deleteItem={deleteItem} />
      ))}
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator todoListState={todoListState} />
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
