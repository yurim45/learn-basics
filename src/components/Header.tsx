import React from 'react';
import { Button } from './Button';
import styled from 'styled-components';
import { flexSet } from '@common/styles/variable';

interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <HeaderWrap>
    <div className='wrapper'>
      <div>
        <h1 className='title'>Learn</h1>
      </div>
      <div>
        {user ? (
          <Button size='small' onClick={onLogout} label='Log out' />
        ) : (
          <>
            <Button size='small' onClick={onLogin} label='Log in' />
            <Button
              primary
              size='small'
              onClick={onCreateAccount}
              label='Sign up'
            />
          </>
        )}
      </div>
    </div>
  </HeaderWrap>
);

const HeaderWrap = styled.header`
  .wrapper {
    ${flexSet('space-between', 'center')};
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px 20px;

    .title {
      margin: 6px 0 6px 10px;
      display: inline-block;
      vertical-align: top;
      font-weight: 900;
      font-size: 20px;
      line-height: 1;
    }
  }

  button + button {
    margin-left: 10px;
  }
`;
