import { Container } from 'react-bootstrap';
import { data } from '../../data';
import styles from '@/styles/DashboardContent.module.css';

export default function ListInfo() {
  return (
    <Container className='px-4'>
      <div className='table-responsive'>
        <div className={styles.grid}>
          {data.map((item) => (
            <div className={styles.gridC}>
              <div>
                <div className={styles.gOne}>
                  <h2 className={styles.gTwo}>{item.title}</h2>
                  <img src={item.img} alt='cert' className={styles.gImg} />
                </div>

                <div className={styles.gThree}>
                  <h4 className='text-secondary'>{item.info}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
