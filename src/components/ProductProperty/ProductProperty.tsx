import React from 'react';
import styles from './productproperty.module.css';

export interface IProductProperty {
  id?: string;
  propertyValue?: string;
  property: string;
}

export function ProductProperty({ property, propertyValue }: IProductProperty) {
  return (
    <p className={styles.property}>
      <span className={styles.propertyValue}>{propertyValue}</span> {property}
    </p>
  );
}
