import Link from 'next/link';
import { SignInButton } from '../SignInButton';
import style from './styles.module.scss';

export function Header() {
  return (
    <header className={style.headerContainer}>
      <div className={style.headerContent}>
        <img src="/images/logo.svg" alt="Logo Good News" />
        <nav>
          <a href="/" className={style.active}>
            Home
          </a>
          <a href="/posts">Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
