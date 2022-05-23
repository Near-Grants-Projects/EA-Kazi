import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import styles from '@/styles/Portfolio.module.css';

export default function PortfolioImages() {
  return (
    <Container>
      <Row className='ms-lg-0'>
        <Col lg={10} className='d-flex mb-4 px-0'>
          <div className={styles.proimage}>
            <Image
              src={'/images/portfolio1.png'}
              width={200}
              height={200}
              objectFit='contain'
              alt='portfolio'
            />
          </div>

          <div className={styles.proimageOne}>
            <Image
              src={'/images/portfolio2.png'}
              width={160}
              height={150}
              objectFit='contain'
              alt='portfolio'
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
