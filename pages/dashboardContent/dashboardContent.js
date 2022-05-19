import { Container } from 'react-bootstrap';
import styles from '@/styles/DashboardContent.module.css';

export default function DashboardContent({ item }) {
  const { title, info, img } = item;

  return (
    <Container>
      <div className={styles.gridC}>
        <div>
          <div className={styles.gOne}>
            <h2 className={styles.gTwo}>{title}</h2>
            <img src={img} alt='cert' className={styles.gImg} />
          </div>

          <div className={styles.gThree}>
            <h4 className='text-secondary'>{info}</h4>
          </div>
        </div>
      </div>
    </Container>
  );
}
