import { Container, Row, Col, Form } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { BsArrowLeft } from 'react-icons/bs';
import SectionTitle from '@/section/sectionTitle';
import styles from '@/styles/CreateCourse.module.css';

export default function PageThree() {
  return (
    <Layout title='Create Course'>
      <section className='pageThree'>
        <Container>
          <Row>
            <Col lg={8} className='mx-auto'>
              <div className={styles.course}>
                <Link href='/create-course/page-two'>
                  <a>
                    <BsArrowLeft />
                  </a>
                </Link>
                <SectionTitle title='Create Course' />
              </div>
              <div className='mt-4 text-center'>
                <SectionTitle title='Choose budget and skills required for this project ?' />
              </div>

              <Form>
                <div className={styles.cform}>
                  <Form.Select className='mt-4 fs-6 text-secondary'>
                    <option>UX Design</option>
                  </Form.Select>
                </div>

                <div className={styles.cform}>
                  <Form.Select className='mt-4 fs-6 text-secondary'>
                    <option>Select currency</option>
                    <option>NGN</option>
                    <option>USD</option>
                  </Form.Select>
                </div>

                <div className={styles.cform}>
                  <Form.Select className='mt-4 fs-6 text-secondary'>
                    <option>Select budget</option>
                    <option>N100,000 - N200,000</option>
                    <option>N105,000 - N250,000</option>
                  </Form.Select>
                  <small className='text-secondary'>
                    Kindly select your currency and estimated budget
                  </small>
                </div>
              </Form>

              <div className='d-grid gap-2 mt-4'>
                <Link href='/create-course/confirm-details'>
                  <a className='btn btn-primary btn-lg'>Post project</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
