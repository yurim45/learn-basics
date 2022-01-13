import React from 'react';

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
  );
};
export default Task;
