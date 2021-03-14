import Header from '../Header';

import styles from './styles.module.css';

export default function Page({ children }) {
  return <div className={styles.container}>
    <Header />
    {children}
  </div>;
}
