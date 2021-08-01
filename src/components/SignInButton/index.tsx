import { signIn, signOut, useSession } from 'next-auth/client';

import style from './styles.module.scss';

import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SignInButton() {
  const [session] = useSession();

  return session ? (
    <button className={style.signInButton} type="button">
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX
        onClick={() => signOut()}
        color="#737380"
        className={style.closeIcon}
      />
    </button>
  ) : (
    <button
      onClick={() => signIn('github')}
      className={style.signInButton}
      type="button"
    >
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  );
}
