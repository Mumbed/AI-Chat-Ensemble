import React from 'react';
import styles from './AnimatedText.module.css';

const AnimatedText = () => {
  
  return (
    <div className = "">
      <nav className={styles.nav}>
        {/* <h2>Donut Chart</h2> */}
      </nav>
        <div className={styles.content}>
        <div className={styles.content__container}>
            <p className={styles.content__container__text}>내가 질문할 내용은</p>
            <ul className={styles.content__container__list}>
            <li className={styles.content__container__list__item}>영어</li>
            <li className={styles.content__container__list__item}>코딩</li>
            <li className={styles.content__container__list__item}>물리</li>
            <li className={styles.content__container__list__item}>게임</li>
            </ul>
        </div>
        </div>
    </div>
  );
};

export default AnimatedText;
