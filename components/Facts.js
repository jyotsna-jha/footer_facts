import React from 'react';
import styles from "../styles/Fact_figures.module.css";

const Facts = () => {
  return (
    <div className={styles.factsContainer}>
      <div className={styles.content}>
        <h2 className={styles.title}>Facts & Figures</h2>
        <hr className={styles.divider} />
        <div className={styles.factItems}>
          <div className={styles.factItem}>
            <div className={styles.factNumber}>1913+</div>
            <div className={styles.factText}>Graduated Students</div>
          </div>
          <div className={styles.factItem}>
            <div className={styles.factNumber}>1836+</div>
            <div className={styles.factText}>Total Students</div>
          </div>
          <div className={styles.factItem}>
            <div className={styles.factNumber}>250+</div>
            <div className={styles.factText}>Experienced Teachers</div>
          </div>
          <div className={styles.factItem}>
            <div className={styles.factNumber}>10</div>
            <div className={styles.factText}>Total Programs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
