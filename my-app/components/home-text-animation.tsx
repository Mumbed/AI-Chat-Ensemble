import React from 'react';
import styles from './AnimatedText.module.css';

const AnimatedText = () => {
  return (
    <div className = "">
        <div className={styles.content}>
        <div className={styles.content__container}>
            <p className={styles.content__container__text}>Hello</p>
            <ul className={styles.content__container__list}>
            <li className={styles.content__container__list__item}>world !</li>
            <li className={styles.content__container__list__item}>bob !</li>
            <li className={styles.content__container__list__item}>users !</li>
            <li className={styles.content__container__list__item}>everybody !</li>
            </ul>
        </div>
        </div>
    </div>
  );
};

export default AnimatedText;
