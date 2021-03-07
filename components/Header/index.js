import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../../assets/images/logo.png';

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

  const linkActiveClass = (href) => (asPath && asPath === href && styles.link_active) || null;

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
              <li key={label} className={linkActiveClass(href)}>
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  );
}
