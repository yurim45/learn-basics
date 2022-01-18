import { atom } from 'recoil';

export interface TodoTypes {
  id: number;
  text: string;
  isComplete: boolean;
  state: string;
}

export const inputState = atom<string>({
  key: 'inputState',
  default: '',
});

export const todoListState = atom<TodoTypes[]>({
  key: 'todoListState',
  default: [
    {
      id: 1,
      text: 'TS 공부하기',
      isComplete: false,
      state: 'TASK_INBOX',
    },
    {
      id: 2,
      text: 'Recoil 공부하기',
      isComplete: false,
      state: 'TASK_INBOX',
    },
    {
      id: 3,
      text: 'Next 공부하기',
      isComplete: false,
      state: 'TASK_INBOX',
    },
  ],
});
