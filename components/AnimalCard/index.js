import styles from './styles.module.css';

export default function AnimalCard({ imgSrc, imgAlt, name }) {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className={styles.body_container}>{name}</div>
    </div>
  );
}
