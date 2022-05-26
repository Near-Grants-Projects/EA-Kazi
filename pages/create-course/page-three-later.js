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
            <Col lg={10} className='mx-auto'>
              <div className={styles.course}>
                <Link href='/create-course/page-two'>
                  <a>
                    <BsArrowLeft />
                  </a>
                </Link>
                <SectionTitle title='Create Course' />
              </div>
              <div className='mt-4 text-center'>
                <SectionTitle title='What is the name of the project they would work on?' />
              </div>

              <Form>
                <div className={styles.cform}>
                  <Form.Select className='mt-4 fs-6 text-secondary'>
                    <option>Select category</option>
                    <option>Designer</option>
                    <option>Web development</option>
                  </Form.Select>
                </div>
              </Form>

              <div className='d-grid gap-2 mt-4'>
                <Link href='/create-course/settings'>
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
