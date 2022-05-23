import { Row, Col } from 'react-bootstrap';
import Title from './title';
import styles from '@/styles/Portfolio.module.css';

export default function PortfolioTitle() {
  return (
    <Row>
      <Col lg={10} className='mx-auto mt-4'>
        <div className={styles.proportfolio}>
          <Title title='Portfolio' />
        </div>
      </Col>
    </Row>
  );
}
