import styles from '@/styles/HeroDesktop.module.css';

export default function HeroImage() {
  return (
    <div className={styles.heroImg}>
      <img
        src={'/images/expert.png'}
        alt='hero-img'
        className='img-fluid ps-lg-5 d-none d-lg-block'
      />

      <img src={'/images/bid1.png'} alt='bid' className={styles.bids} />
      <img src={'/images/cert1.png'} alt='bid' className={styles.cert} />
      <img src={'/images/cross.png'} alt='bid' className={styles.cross} />
    </div>
  );
}
