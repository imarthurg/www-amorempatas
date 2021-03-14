import styles from './styles.module.css';

export default function PageSection({ children, off }) {
  const bgcolor = off ? '#000' : '#fff';
  const fontColor = off ? '#fff' : '#000';

  return (
    <section
      className={styles.container}
      style={{ backgroundColor: bgcolor, color: fontColor }}
    >
      {children}
    </section>
  );
}
