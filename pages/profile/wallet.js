import { Row, Col } from 'react-bootstrap';
import Title from './title';
import CurrentBalance from '@/section/currentBalance';
// import styles from '@/styles/Walletpro.module.css';

export default function Wallet() {
  return (
    <Row>
      <Col lg={10} className='mx-auto mt-4'>
        <Title title='Wallet' />
      </Col>

      <Col lg={10} className='mx-auto mb-4'>
        <CurrentBalance amount='#20,600' text='current balance' />
      </Col>
    </Row>
  );
}
