import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../../assets/images/logo.png';
import NavLink from '../NavLink';

import styles from './styles.module.css';

const navlinks = [
  {
    label: 'Início',
    href: '/',
  },
  {
    label: 'Quem somos',
    href: '/quem-somos',
  },
];

export default function Header() {
  const { asPath } = useRouter();

  const isActiveLink = (href) => asPath && asPath === href;

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.logo_container}>
          <Link href="/">
            <a>
              <img src={Logo} alt="Logo da Santo Pet" layout="fill" />
            </a>
          </Link>
        </div>
        <nav>
          <ol>
            {navlinks.map(({ label, href }) => (
              <li key={label}>
                <NavLink
                  href={href}
                  rounded
                  outlined
                  active={isActiveLink(href)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  );
}
