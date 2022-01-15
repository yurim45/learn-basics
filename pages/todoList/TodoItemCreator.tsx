import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '@common/data/todo';
import type { NextPage } from 'next';

const TodoItemCreator: NextPage = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const handleInputValue = ({ target: { value } }): void => {
    setInputValue(value);
  };

  const addItem = () => {
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Todo를 입력해보세요!'
        value={inputValue}
        onChange={handleInputValue}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;

let id: number = 0;
function getId(): number {
  return id++;
}
