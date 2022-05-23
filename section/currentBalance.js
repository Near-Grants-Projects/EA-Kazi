import styles from '@/styles/CurrentBalance.module.css';

export default function CurrentBalance({ amount, text }) {
  return (
    <div className={styles.proamount}>
      <h4>{amount}</h4>
      <p>{text}</p>
    </div>
  );
}
