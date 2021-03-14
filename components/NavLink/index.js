import Link from 'next/link';
import classnames from 'classnames';

import styles from './styles.module.css';

export default function NavLink({ children, href, rounded, outlined, active }) {
  const customStyles = classnames(
    styles.link,
    (rounded && styles.rounded) || '',
    (outlined && styles.outlined) || '',
    (active && styles.active) || '',
  );

  return (
    <Link href={href}>
      <a className={customStyles}>{children}</a>
    </Link>
  );
}
