import styles from '../../styles/Header.module.css';

const navlinks = [
  {
    label: 'Navlink',
    src: '#',
  },
  {
    label: 'Navlink',
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
          <img src= alt="Logo da Santo Pet" />
        </div>
        <nav className={styles.navbar}>
          <ol>
            {navlinks.map(({ label, src }) => (
              <li>
                <a src={src}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  );
}
