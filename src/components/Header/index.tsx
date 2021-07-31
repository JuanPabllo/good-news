import { SignInButton } from '../SignInButton';
import style from './styles.module.scss';

export function Header() {
  return (
    <header className={style.headerContainer}>
      <div className={style.headerContent}>
        <img src="/images/logo.svg" alt="Logo Good News" />
        <nav>
          <a className={style.active}>Home</a>
          <a>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
