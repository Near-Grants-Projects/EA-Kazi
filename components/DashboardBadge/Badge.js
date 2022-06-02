import { Container } from 'react-bootstrap';
import { lists } from '../../data';
import styles from '@/styles/List.module.css';

export default function DashboardBadge() {
  return (
    <div className={styles.list}>
      <Container>
        <div className='table-responsive'>
          <div className={styles.grid}>
            {lists.map((item) => (
              <div className='mx-2'>
                <div className={styles.badge}>
                  <img src={item.img} className='pb-2' />
                  <h2 className={styles.gTwo}>{item.text}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
