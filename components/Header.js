import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  background-color: #eee;
  padding: 10px 15px;
  border-radius: 4px;
  margin: 8px 8px 20px;
  display: flex;

  a + a {
    margin-left: 10px;
  }

  > div:first-child {
    margin-right: auto;
  }
`;

export default function Header() {
  return (
    <header css={headerStyles}>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a data-test-id="header-about-link">About</a>
        </Link>
        <Link href="/animals">
          <a data-test-id="header-animals-link">Animals</a>
        </Link>
        <Link href="/animals-cookie-lecture">
          <a>Animals/cookies-lecture</a>
        </Link>
        <Link href="/animal-management-naive-dont-copy">
          <a data-test-id="header-management-link">Management Naive</a>
        </Link>
        <Link href="/animal-api-frontend">
          <a data-test-id="header-management-link">API Frontend</a>
        </Link>
      </div>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/register">
        <a>Register</a>
      </Link>
    </header>
  );
}
