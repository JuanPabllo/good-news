import { useRouter } from 'next/router';
import { SignInButton } from '../SignInButton';
import style from './styles.module.scss';
import ActiveLink from '../ActiveLink';

export function Header() {
  return (
    <header className={style.headerContainer}>
      <div className={style.headerContent}>
        <img src="/images/logo.svg" alt="Logo Good News" />
        <nav>
          <ActiveLink activeClassName={style.active} href="/">
            <a>Home</a>
          </ActiveLink>

          <ActiveLink activeClassName={style.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
