import { Container } from 'react-bootstrap';
import styles from '@/styles/List.module.css';

export default function List({ item }) {
  const { text, img } = item;

  return (
    <Container>
      <div className={styles.badge}>
        <img src={img} className='pb-2' />
        <h2 className={styles.gTwo}>{text}</h2>
      </div>
    </Container>
  );
}
