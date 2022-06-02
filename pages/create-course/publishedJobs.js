import { Container } from 'react-bootstrap';
import { publishJobs } from '../../data';
import styles from '@/styles/PublishJobList.module.css';

export default function PublishedJobs() {
  return (
    <Container className='px-4 mt-4'>
      {publishJobs.map((item) => (
        <div className='d-flex'>
          <div>
            <h5 className={styles.role}>{item.role}</h5>
            <p className={styles.text}>{item.text}</p>
          </div>
          <div className={styles.amount}>{item.amount}</div>
        </div>
      ))}
    </Container>
  );
}
