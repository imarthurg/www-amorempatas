import styles from './styles.module.css';

const tagsLabels = (key) => ({
  is_vaccinated: 'vacinado',
  is_castrated: 'castrado',
  has_deficiency: 'PCD',
}[key] || null );

const tagsBgColors = (key) => ({
  is_vaccinated: '#696969',
  is_castrated: '#696969',
  has_deficiency: '#696969',
}[key] || '#696969' );

export default function AnimalTag({ tag }) {
  return (
    tagsLabels(tag) && <span className={styles.container} style={{ backgroundColor: tagsBgColors(tag) }}>{tagsLabels(tag)}</span>
  );
}
