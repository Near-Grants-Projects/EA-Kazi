import styles from '@/styles/PublishJobList.module.css';

export default function PublishJobList({ item }) {
  const { role, text, amount } = item;

  return (
    <div className='d-flex'>
      <div>
        <h5 className={styles.role}>{role}</h5>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.amount}>{amount}</div>
    </div>
  );
}
