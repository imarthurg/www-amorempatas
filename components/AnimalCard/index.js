import AnimalTag from '../AnimalTag';
import styles from './styles.module.css';

const getDescription = (size, age) => {
  return `porte ${size}, ${age} ${age > 1 ? 'anos' : 'ano'}`
}

const tagsMock = ['is_vaccinated', 'is_castrated', 'has_deficiency'];

export default function AnimalCard({ imgSrc, imgAlt, name, size = 'pequeno', age = 10 }) {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className={styles.body_container}>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{getDescription(size, age)}</p>
        <div className={styles.tags}>
          {tagsMock.map((tag) => <AnimalTag key={tag} tag={tag} />)}
        </div>
      </div>
    </div>
  );
}
