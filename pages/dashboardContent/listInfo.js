import { Container } from 'react-bootstrap';
import { data } from '../../data';
import DashboardContent from './dashboardContent';
import styles from '@/styles/DashboardContent.module.css';

export default function ListInfo() {
  return (
    <Container>
      <div className='table-responsive'>
        <div className={styles.grid}>
          {data.map((item) => (
            <DashboardContent key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
