import { Container, Row, Col, Form } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { BsArrowLeft } from 'react-icons/bs';
import SectionTitle from '@/section/sectionTitle';
import styles from '@/styles/CreateCourse.module.css';

export default function PageTwo() {
  return (
    <Layout title='Create Course'>
      <section className='pageTwo'>
        <Container>
          <Row>
            <Col lg={10} className='mx-auto'>
              <div className={styles.course}>
                <Link href='/create-course/page-one'>
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
                  <Form.Control
                    type='text'
                    className='mt-4 mb-4'
                    placeholder='UI/UI complete course'
                  />
                  <Form.Control
                    as='textarea'
                    placeholder='This course teaches the basics of UI/UX. It is the best course for beginners who want to shape their career as a designer'
                  />
                </div>
              </Form>

              <div className='d-grid gap-2 mt-4'>
                <Link href='/create-course/page-three'>
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
