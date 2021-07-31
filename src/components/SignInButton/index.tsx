import style from './styles.module.scss';

import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button className={style.signInButton} type="button">
      <FaGithub color="#04d361" />
      Juan Pablo
      <FiX color="#737380" className={style.closeIcon} />
    </button>
  ) : (
    <button className={style.signInButton} type="button">
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  );
}
