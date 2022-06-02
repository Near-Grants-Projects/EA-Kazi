import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import Layout from './Layout';
import HeroInfo from './HeroInfo';
import HeroImage from './HeroImage';
import styles from '@/styles/HeroDesktop.module.css';

export default function HeroDesktop() {
  return (
    <section className={styles.heroDesktop}>
      <Layout title='Bid for Jobs | Get Certifications'>
        <Container>
          <Row>
            <Col md={9} lg={7}>
              <HeroInfo
                title='Get trained and certified by Experts.'
                info='Freelancers can bid for jobs after acquiring the required skillset
              and certifications'
              />
              <Link href='/account/register'>
                <a className='btn btn-primary px-4 py-2'>Get Started</a>
              </Link>
            </Col>

            <Col lg={5}>
              <HeroImage />
            </Col>
          </Row>
        </Container>
      </Layout>
    </section>
  );
}
