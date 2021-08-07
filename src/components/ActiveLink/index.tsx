import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, cloneElement } from 'react';

interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName?: string;
}

function ActiveLink({ children, activeClassName, ...props }: IActiveLinkProps) {
  const { asPath } = useRouter();
  const className = asPath === props.href ? activeClassName : '';

  return (
    <Link {...props}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
}

export default ActiveLink;
