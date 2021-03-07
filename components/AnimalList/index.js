import { useState } from 'react';
import { emojify } from 'react-emojione';

import AnimalCard from '../AnimalCard';
import Button from '../../components/Button';

import DogImage from '../../assets/images/dog.jpg';
import CatImage from '../../assets/images/cat.jpg';
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

  {
    id: 5,
    name: 'Nilce',
    type: 'cat',
    imgSrc: CatImage,
  },

  ,
  {
    id: 6,
    name: 'Nilce',
    type: 'cat',
    imgSrc: CatImage,
  },

  {
    id: 7,
    name: 'Nilce',
    type: 'cat',
    imgSrc: CatImage,
  },

  {
    id: 8,
    name: 'Nilce',
    type: 'cat',
    imgSrc: CatImage,
  },
];

const categories = [
  { label: 'Todos', value: '', emoji: '' },
  { label: 'Cachorros', value: 'dog', emoji: ':dog:' },
  { label: 'Gatos', value: 'cat', emoji: ':cat:' },
];

export default function AnimalList() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className={styles.container}>
      <div className={styles.categories_container}>
        {categories.map(({ label, emoji, value }) => (
          <Button
            key={value}
            className={styles.categories_container_button}
            status={selectedCategory === value && 'primary'}
            handleClick={() => selectCategory(value)}
          >
            {label}&nbsp;
            {emoji && emojify(emoji)}
          </Button>
        ))}
      </div>

      {animals
        .filter(({ type }) => !selectedCategory || type === selectedCategory)
        .map(({ id, name, imgSrc }) => (
          <AnimalCard key={id} name={name} imgSrc={imgSrc} />
        ))}
    </div>
  );
}
