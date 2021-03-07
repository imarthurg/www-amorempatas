import { useState } from 'react';
import AnimalCard from '../AnimalCard';
import Button from '../../components/Button';

import styles from './styles.module.css';

const animals = [
  {
    name: 'Pedro1',
    type: 'dog',
  },
  {
    name: 'Pluto2',
    type: 'dog',
  },
  {
    name: 'Pluto3',
    type: 'dog',
  },
  {
    name: 'Pluto4',
    type: 'dog',
  },
];

const categories = [
  { label: 'Cachorros', icon: '#' },
  { label: 'Gatos', icon: '#' },
];

export default function AnimalList() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className={styles.container}>
      <div className={styles.categories_container}>
        {categories.map(({ label, icon }) => (
          <Button
            key={label}
            className={styles.categories_container_button}
            status={selectedCategory === label && 'primary'}
            handleClick={() => selectCategory(label)}
          >
            {label}
          </Button>
        ))}
      </div>
      {animals.map(({ name }) => (
        <AnimalCard key={name} name={name} />
      ))}
    </div>
  );
}
