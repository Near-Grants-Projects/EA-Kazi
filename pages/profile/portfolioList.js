import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { BsDot } from 'react-icons/bs';
import styles from '@/styles/Portfolio.module.css';

export default function PortfolioList({ item }) {
  const { img, title, company, status } = item;

  return (
    <Container className='mb-4'>
      <Row>
        <Col lg={12}>
          <div className={styles.proitem}>
            <>
              <div className='d-flex'>
                <div className='me-3'>
                  <Image src={img} width={60} height={60} objectFit='contain' />
                </div>

                <div className='d-flex flex-column'>
                  <h4 className='mt-2'>{title}</h4>
                  <p>
                    {company}
                    <BsDot /> {status}
                  </p>
                </div>
              </div>
            </>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
