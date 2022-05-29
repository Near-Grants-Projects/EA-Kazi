import { Container, Row, Col, Form } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { BsArrowLeft } from 'react-icons/bs';
import SectionTitle from '@/section/sectionTitle';
import styles from '@/styles/CreateCourse.module.css';

export default function PageOne() {
  return (
    <Layout title='Create Course'>
      <section className='pageOne'>
        <Container>
          <Row>
            <Col lg={10} className='mx-auto'>
              <div className={styles.course}>
                <Link href='/trainer'>
                  <a>
                    <BsArrowLeft />
                  </a>
                </Link>
                <SectionTitle title='Create Course' />
              </div>
              <div className='mt-4 text-center'>
                <SectionTitle title='What is the name of the course you want to create?' />
              </div>

              <Form>
                <div className={styles.cform}>
                  <Form.Control
                    type='text'
                    className='mt-4 mb-4'
                    placeholder='Enter course title'
                  />
                  <Form.Control as='textarea' placeholder='Enter description' />
                </div>
              </Form>

              <div className='d-grid gap-2 mt-4'>
                <Link href='/trainer/page-two'>
                  <a className='btn btn-primary btn-lg'>Next</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
