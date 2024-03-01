import styles from '../../styles/sass/components/_card-skeleton.module.scss';

const ProductCardSkeleton = () => {
  return (
    <div className={styles.card}>
      <div className={styles['card__face']}>
        <div className={styles['card__face-header']}>
          <h3 className={styles.category}></h3>

          <button className={styles.btn}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </button>
        </div>

        <div className={styles['card__face-price-sm']}>
          <p className={styles.price}></p>

          <span className={styles.title}></span>
        </div>

        <p className={styles['card__face-price']}></p>

        <div className={styles['card__face-footer']}>
          <span className={styles.title}></span>

          <div className={styles.store}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
