import React, { useState } from 'react';
import { IProductProperty, ProductProperty } from '../ProductProperty';
import styles from './productcard.module.scss';

export interface IProductCard {
  id: string;
  taste: string;
  tasteDescrDisabled: string;
  tasteDescr: string;
  weightValue: string;
  isDisabled?: boolean;
  properties: Array<IProductProperty>;
}

export function ProductCard({
  taste,
  tasteDescrDisabled,
  tasteDescr,
  weightValue,
  isDisabled = false,
  properties,
}: IProductCard) {
  const [isSelected, setSelected] = useState(false);
  const [isSelectedHover, setSelectedHover] = useState(false);

  function handleContent() {
    if (isSelected === true) {
      setSelectedHover(false);
    }
    setSelected(() => !isSelected);
  }

  function mouseEnterEvent(e: React.MouseEvent) {
    if (isSelected === true) {
      setSelectedHover(true);
    }
  }

  function mouseLeaveEvent(e: React.MouseEvent) {
    setSelectedHover(false);
  }

  return (
    <li
      className={styles.card}
      onMouseEnter={mouseEnterEvent}
      onMouseLeave={mouseLeaveEvent}
    >
      <button
        className={`${styles.content}  ${
          isSelected && styles.contentSelected
        } ${isSelectedHover && styles.contentSelectedHover}
        } `}
        onClick={handleContent}
        disabled={isDisabled}
      >
        <div className={styles.topContent}>
          <p className={styles.slogan}>
            {isSelectedHover
              ? 'Котэ не одобряет?'
              : 'Сказочное заморское яство'}
          </p>
        </div>

        <div className={styles.bottomContent}>
          <h2 className={styles.name}>Нямушка </h2>
          <h3 className={styles.taste}>{taste}</h3>

          {properties.map((property) => (
            <ProductProperty
              property={property.property}
              propertyValue={property.propertyValue}
              key={property.id}
            />
          ))}

          <h3 className={styles.weight}>
            <span className={`${styles.weightText} ${styles.weightText_value}`}>
              {weightValue}
            </span>
            <span
              className={`${styles.weightText} ${styles.weightText_dimension}`}
            >
              кг
            </span>
          </h3>
        </div>
      </button>

      <p className={styles.descr}>
        {isSelected ? tasteDescr : `Чего сидишь? Порадуй котэ, `}
        {!isSelected && (
          <button className={styles.buy} onClick={handleContent}>
            купи.
          </button>
        )}
      </p>

      <p className={`${styles.descr} ${styles.descrDisabled}`}>
        {tasteDescrDisabled}
      </p>
    </li>
  );
}
