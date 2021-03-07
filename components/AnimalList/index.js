import { useState } from 'react';
import { emojify } from 'react-emojione';

import AnimalCard from '../AnimalCard';
import Button from '../../components/Button';

import DogImage from '../../assets/images/dog.jpg';
import styles from './styles.module.css';

const animals = [
  {
    id: 1,
    name: 'Pedro',
    type: 'dog',
    imgSrc: DogImage,
  },
  {
    id: 2,
    name: 'Pedro',
    type: 'dog',
    imgSrc: DogImage,
  },
  {
    id: 3,
    name: 'Pedro',
    type: 'dog',
    imgSrc: DogImage,
  },
  {
    id: 4,
    name: 'Pedro',
    type: 'dog',
    imgSrc: DogImage,
  },
];

const categories = [
  { label: 'Cachorros', emoji: ':dog:' },
  { label: 'Gatos', emoji: ':cat:' },
];

export default function AnimalList() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className={styles.container}>
      <div className={styles.categories_container}>
        {categories.map(({ label, emoji }) => (
          <Button
            key={label}
            className={styles.categories_container_button}
            status={selectedCategory === label && 'primary'}
            handleClick={() => selectCategory(label)}
          >
            {label}&nbsp;
            {emojify(emoji)}
          </Button>
        ))}
      </div>

      {animals.map(({ name, imgSrc }) => (
        <AnimalCard key={name} name={name} imgSrc={imgSrc} />
      ))}
    </div>
  );
}
