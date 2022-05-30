import { Container } from 'react-bootstrap';
import { lists } from '../../data';
import List from './list';
import styles from '@/styles/List.module.css';

export default function ListType() {
  return (
    <div className={styles.list}>
      <Container>
        <div className='table-responsive'>
          <div className={styles.grid}>
            {lists.map((item) => (
              <List key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
