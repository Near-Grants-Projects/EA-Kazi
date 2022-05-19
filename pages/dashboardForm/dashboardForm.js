import { Container, Row, Col } from 'react-bootstrap';
import Layout from '@/components/Layout';
import { BsSearch } from 'react-icons/bs';
import styles from '@/styles/DashboardForm.module.css';

export default function DashboardForm() {
  return (
    <Layout title='EA Kazi | Dashboard'>
      <section className={styles.dash}>
        <Container>
          <Row>
            <Col lg={6} className='mt-4'>
              <h1>Hi, Marv</h1>
              <form>
                <div className={styles.wrapper}>
                  <div className={styles.icon}>
                    <BsSearch />
                  </div>
                  {/* Change form border color later */}
                  <input
                    type='text'
                    className='form-control form-control-lg text-secondary fs-6'
                    placeholder='e.g Game development jobs...'
                  />
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
