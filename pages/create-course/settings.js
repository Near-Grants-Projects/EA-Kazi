import { Container, Row, Col, Form } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { BsArrowLeft } from 'react-icons/bs';
import SectionTitle from '@/section/sectionTitle';
import styles from '@/styles/CreateCourse.module.css';

export default function Settings() {
  return (
    <Layout title='Course Settings'>
      <section className='settings'>
        <Container>
          <Row>
            <Col lg={10} className='mx-auto'>
              <div className={styles.course}>
                <Link href='/create-course/page-three'>
                  <a>
                    <BsArrowLeft />
                  </a>
                </Link>
                <SectionTitle title='Course Settings' />
              </div>

              <Form>
                <div className={styles.cform}>
                  <Form.Group className='mt-5 mb-4 fw-bold'>
                    <Form.Label>Maximum students</Form.Label>
                    <Form.Control type='text' placeholder='500' />
                  </Form.Group>
                </div>

                <div className={styles.cform}>
                  <Form.Label className='fw-bold'>Difficulty Level</Form.Label>
                  <Form.Select className='fs-6 text-secondary'>
                    <option>Beginner</option>
                    <option>Advanced</option>
                  </Form.Select>
                </div>

                <div className={styles.cform}>
                  <Form.Label className='mt-4 fw-bold'>Course Type</Form.Label>
                  <Form.Select className='fs-6 text-secondary'>
                    <option>Paid</option>
                  </Form.Select>
                </div>

                <div className={styles.cform}>
                  <Form.Group className='mt-4 mb-4 fw-bold'>
                    <Form.Label>Total Duration</Form.Label>
                    <Form.Control type='text' placeholder='3hrs' />
                  </Form.Group>
                </div>

                <div className={styles.cform}>
                  <Form.Group className='mt-4 mb-4 fw-bold'>
                    <Form.Label>Benefits</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Certificate and Job placement'
                    />
                  </Form.Group>
                </div>

                <div className={styles.cform}>
                  <Form.Group className='mt-4 mb-4 fw-bold'>
                    <Form.Label>Target Audience</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Anyone looking into UI design'
                    />
                  </Form.Group>
                </div>
              </Form>

              <div className='d-grid gap-2 mt-4 mb-5'>
                <Link href='#'>
                  <a className='btn btn-primary text-center btn-lg'>Next</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
