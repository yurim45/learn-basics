import React from 'react';
import styled from 'styled-components';

export type TaskItem = {
  id: number;
  title: string;
  state: string;
};
type TaskProps = {
  task: TaskItem;
  onArchiveTask(id: number): void;
  onPinTask(id: number): void;
};

const Task = ({ task, onArchiveTask, onPinTask }: TaskProps) => {
  return (
    <TodoWrap>
      <div className={`list-item ${task.state}`}>
        <label className='checkbox'>
          <input
            type='checkbox'
            // ARCHIVED 상태에 따라 checked || unchecked
            defaultChecked={task.state === 'TASK_ARCHIVED'}
            disabled={true}
            name='checked'
          />
          <span
            className='checkbox-custom'
            // onArchiveTask event : (task id 전달)
            onClick={() => onArchiveTask(task.id)}
          />
        </label>
        <div className='title'>
          <input
            type='text'
            value={task.title}
            readOnly={true}
            placeholder='Input title'
          />
        </div>
        <div className='actions' onClick={(event) => event.stopPropagation()}>
          {task.state !== 'TASK_ARCHIVED' && (
            // onPinTask event : (task id 전달)
            <a onClick={() => onPinTask(task.id)}>
              <span className='icon-star' />
            </a>
          )}
        </div>
      </div>
    </TodoWrap>
  );
};
export default Task;

const TodoWrap = styled.div`
  background-color: #26c6da;

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
  .list-item .actions a {
    display: inline-block;
    vertical-align: top;
    text-align: center;
    color: #eee;
  }
  .list-item .actions a:hover {
    color: #2cc5d2;
  }
  .list-item .actions a:active {
    color: #555;
  }
  .list-item .actions [class^='icon-'] {
    font-size: 16px;
    line-height: 24px;
    line-height: 3rem;
    text-align: center;
  }
  .list-item.TASK_PINNED .icon-star {
    color: #2cc5d2;
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
`;
