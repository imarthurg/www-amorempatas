import Image from 'next/image';
import Logo from '../../assets/images/logo.png'

import styles from '../../styles/Header.module.css';

const navlinks = [
  {
    label: 'Início',
    src: '#',
  },
  {
    label: 'Quem somos',
    src: '#',
  },
  {
    label: 'Navlink',
    src: '#',
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.logo_container}>
          <img src={Logo} alt="Logo da Santo Pet" layout="fill" />
        </div>
        <nav className={styles.navbar}>
          <ol>
            {navlinks.map(({ label, src }) => (
              <li key={label}>
                <a src={src}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  );
}
