import { Col } from 'react-bootstrap';
import styles from '@/styles/Feed.module.css';

export default function Feed() {
  return (
    <div className={styles.feed}>
      <Col lg={8} xl={10} xxl={10} className='ms-auto mt-4'>
        <h2>Feed</h2>
      </Col>
    </div>
  );
}
