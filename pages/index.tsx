import type { NextPage } from 'next';
import { Header } from '../src/components/Header';
import Task from '../src/components/Task';

const Home: NextPage = () => {
  return (
    <div>
      <Header user={true} />
      <article>
        <Task task={{ id: 1, title: 'todo list', state: 'TASK_INBOX' }} />
      </article>
    </div>
  );
};

export default Home;
