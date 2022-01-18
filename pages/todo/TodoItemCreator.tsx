import React, { ChangeEvent } from 'react';
import type { NextPage } from 'next';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { inputState, todoListState, TodoTypes } from '@common/data/todo';
import styled from 'styled-components';
import { flexSet } from '@/src/common/styles/variable';

const TodoItemCreator: NextPage = (): JSX.Element => {
  const [text, setText] = useRecoilState<string>(inputState);
  const todos = useRecoilValue<TodoTypes[]>(todoListState);
  const setTodos = useSetRecoilState<TodoTypes[]>(todoListState);

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setText(value);
  };

  const addItem = () => {
    if (!text.trim()) {
      alert('내용이 없네요😕 Todo를 입력해주세요😀');
      return;
    }

    // 배열에 값이 존재할시, 고유값은 마지막 인덱스에 위치한 id값에서 1을 늘려줘서 고유값 생성.
    // 만약 값이 존재하지 않을시 초기값은 0
    const nextId: number =
      todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;

    const todo: TodoTypes = {
      id: nextId,
      text,
      isComplete: false,
      state: 'TASK_INBOX',
    };

    setTodos([...todos, todo]);
    setText('');
  };

  return (
    <InputWrap>
      <input
        type='text'
        placeholder='Todo를 입력해보세요!'
        value={text}
        onChange={handleInputValue}
      />
      <button onClick={addItem}>
        <i className='far fa-edit' />
      </button>
    </InputWrap>
  );
};

export default TodoItemCreator;

const InputWrap = styled.div`
  ${flexSet('space-between', 'center')}
  margin-top: 20px;
  padding: 0 4px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.mint};

  input {
    padding: 2px;
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
  }

  button {
    color: ${({ theme }) => theme.colors.mint};
    cursor: pointer;
  }
`;
