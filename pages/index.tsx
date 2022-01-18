import type { NextPage } from 'next';
import { Header } from '@components/Header';
import styled from 'styled-components';
import { formSet } from '@common/styles/variable';
import TodoList from './todo';

const Home: NextPage = () => {
  const onLogin = (): void => {
    alert('로그인 페이지를 준비중입니다.');
  };

  const onLogout = (): void => {
    alert('로그아웃 페에지를 준비중입니다.');
  };

  const onCreateAccount = (): void => {
    alert('회원가입 페에지를 준비중입니다.');
  };

  return (
    <Index>
      <div className='main'>
        <Header
          user={false}
          onLogin={onLogin}
          onLogout={onLogout}
          onCreateAccount={onCreateAccount}
        />
        <article>
          <TodoList />
        </article>
      </div>
    </Index>
  );
};

export default Home;

const Index = styled.section`
  background-color: ${({ theme }) => theme.colors.mint};

  .main {
    margin: auto;
    max-width: 1220px;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.white};

    article {
      margin: 100px auto;
      ${formSet};
    }
  }
`;
