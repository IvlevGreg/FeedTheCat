import React from 'react';
import { IProductCard, ProductCard } from '../ProductCard';
import styles from './productlist.module.css';

export function ProductList() {
  const productsArray: Array<IProductCard> = [
    {
      id: '1',
      taste: 'с фуа-гра',
      tasteDescr: 'Печень утки разварная с артишоками.',
      tasteDescrDisabled: 'Печалька, с фуа-гра закончился.',
      weightValue: '0,5',

      properties: [
        {
          id: '1',
          propertyValue: '10',
          property: 'порций ',
        },
        {
          id: '2',
          property: 'мышь в подарок',
        },
      ],
    },
    {
      id: '2',
      taste: 'с рыбой',
      tasteDescr: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      tasteDescrDisabled: 'Печалька, с рыбой закончился.',
      weightValue: '2',

      properties: [
        {
          id: '3',
          propertyValue: '40 ',
          property: 'порций',
        },
        {
          id: '4',
          propertyValue: '2',
          property: 'мыши в подарок',
        },
      ],
    },
    {
      id: '3',
      taste: 'с курой',
      tasteDescr: 'Филе из цыплят с трюфелями в бульоне.',
      tasteDescrDisabled: 'Печалька, с курой закончился.',
      weightValue: '5',
      isDisabled: true,
      properties: [
        {
          id: '5',
          propertyValue: '100',
          property: 'порций',
        },
        {
          id: '6',
          propertyValue: '5 ',
          property: 'мышей в подарок',
        },
        {
          id: '7',
          property: 'заказчик доволен',
        },
      ],
    },
  ];

  return (
    <ul className={styles.list}>
      {productsArray.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </ul>
  );
}
