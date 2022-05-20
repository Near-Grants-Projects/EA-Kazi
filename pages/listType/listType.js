import { Container } from 'react-bootstrap';
import { lists } from '../../data';
import List from './list';
import styles from '@/styles/List.module.css';

export default function ListType() {
  return (
    <Container>
      <div className={styles.grid}>
        {lists.map((item) => (
          <List key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
}
