import Header from '../components/Header';

import MainBg from '../assets/images/main_bg.jpg';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main_bg}>
        <img src={MainBg} alt="Cachorrinho recebendo carinho" />
      </div>

      <Header />
    </div>
  );
}
