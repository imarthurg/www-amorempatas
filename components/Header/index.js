import Link from 'next/link';
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
  }
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.logo_container}>
          <img src={Logo} alt="Logo da Santo Pet" layout="fill" />
        </div>
        <nav>
          <ol>
            {navlinks.map(({ label, href }) => (
              <li key={label}>
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
