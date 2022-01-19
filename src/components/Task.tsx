import React from 'react';
import styled from 'styled-components';
import { TodoTypes } from '../common/data/todo';

type TaskProps = {
  task: TodoTypes;
  onComplete(id: number): void;
  deleteItem(id: number): void;
};

const Task = ({ task, onComplete, deleteItem }: TaskProps) => {
  return (
    <TaskWrap>
      <div className={`list-item ${task?.state}`}>
        <label className='checkbox'>
          <input
            type='checkbox'
            // ARCHIVED 상태에 따라 checked || unchecked task?.state === 'TASK_ARCHIVED'
            defaultChecked={task?.isComplete}
            disabled={task?.isComplete}
            name='checked'
          />
          <span
            className='checkbox-custom'
            onClick={() => onComplete(task?.id)}
          />
        </label>
        <div className='title'>
          <input
            type='text'
            value={task?.text}
            readOnly={true}
            placeholder='Todo를 입력해보세요!'
          />
        </div>
        <div className='actions' onClick={(event) => event.stopPropagation()}>
          {task?.isComplete ? (
            <button className='icon-star disabled' disabled>
              <i className='far fa-check-circle' />
            </button>
          ) : (
            <button
              className='icon-star'
              onClick={() => deleteItem(task?.id)}
              disabled={task?.isComplete}
            >
              <i className='far fa-trash-alt' />
            </button>
          )}
        </div>
      </div>
    </TaskWrap>
  );
};
export default Task;

const TaskWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.mint};

  .list-item {
    font-size: 14px;
    line-height: 20px;
    display: flex;
    flex-wrap: wrap;
    height: 3rem;
    width: 100%;
    background: white;
    transition: all ease-out 150ms;
  }
  .list-item .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
  }
  .list-item input[type='text'] {
    background: transparent;
    width: 100%;
  }
  .list-item input[type='text']:focus {
    cursor: text;
  }
  .list-item .actions {
    transition: all 200ms ease-in;
    padding-right: 20px;
  }
  .list-item .actions button {
    display: inline-block;
    vertical-align: top;
    text-align: center;
    color: ${({ theme }) => theme.colors.mint};
  }

  .list-item .actions button:disabled {
    color: #aaa;
  }

  .list-item .actions [class^='icon-'] {
    font-size: 16px;
    line-height: 24px;
    line-height: 3rem;
    text-align: center;
  }
  .list-item .TASK_PINNED .icon-star {
    color: ${({ theme }) => theme.colors.mint};
  }

  .list-item.TASK_ARCHIVED input[type='text'] {
    color: #aaa;
  }
  .list-item:hover {
    background-image: linear-gradient(to bottom, #e5f9f7 0%, #f0fffd 100%);
  }
  .list-item:hover .checkbox {
    cursor: pointer;
  }
  .list-item + .list-item {
    border-top: 1px solid #f0f9fb;
  }
  .list-item.checked input[type='text'] {
    color: #ccc;
    text-decoration: line-through;
  }
  .list-item.checked .delete-item {
    display: inline-block;
  }

  &-Complete {
    background-color: ${({ theme }) => theme.colors.gray};
    box-shadow: ${({ theme }) => theme.colors.gray} 0 0 0 1px inset;
  }
`;
