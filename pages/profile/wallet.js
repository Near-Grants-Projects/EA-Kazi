import { Row, Col } from 'react-bootstrap';
import Title from './title';
import styles from '@/styles/Walletpro.module.css';

export default function Wallet() {
  return (
    <Row>
      <Col lg={10} className='mx-auto mt-4'>
        <Title title='Wallet' />
      </Col>

      <div className='col-lg-10 mx-auto mb-4'>
        <div className={styles.proamount}>
          <h4>#20,600</h4>
          <p>current balance</p>
        </div>
      </div>
    </Row>
  );
}
