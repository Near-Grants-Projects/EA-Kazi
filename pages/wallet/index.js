import { Container, Row, Col, Button } from 'react-bootstrap';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { transactions } from '../../data';
import { BsArrowLeft } from 'react-icons/bs';
import SectionTitle from '@/section/sectionTitle';
import CurrentBalance from '@/section/currentBalance';
import TransactionList from './transactionList';
import styles from '@/styles/Wallet.module.css';

export default function Wallet() {
  const router = useRouter();

  return (
    <Layout title='Wallet'>
      <Container fluid className={styles.tWallet}>
        <Row>
          <Col lg={10} className='mx-auto mt-4'>
            <div className={styles.wallet}>
              <Link href='/profile' className='d-flex me-5 mt-4'>
                <a>
                  <BsArrowLeft />
                </a>
              </Link>
              <SectionTitle title='Wallet' />
            </div>
          </Col>

          <Col lg={10} className='mx-auto mb-3'>
            <CurrentBalance amount='#20,600' text='current balance' />
          </Col>

          <Col lg={10} className='mx-auto px-4'>
            <div className='d-flex'>
              <Button variant='secondary'>Transactions</Button>
              <Button
                onClick={() => router.push('/wallet-two')}
                className='ms-2'
                variant='primary'
              >
                Actions
              </Button>
            </div>
          </Col>
          <>
            {transactions.map((item) => (
              <TransactionList key={item.id} item={item} />
            ))}
          </>

          <Col lg={10} className='d-grid gap-2 mt-2 mb-5 mx-auto px-4'>
            <Link href='/jobs'>
              <a className='btn btn-outline-primary btn-lg mt-4'>Next</a>
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
