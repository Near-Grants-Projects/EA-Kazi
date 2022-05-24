import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { BsArrowLeft } from 'react-icons/bs';
import SectionTitle from '@/section/sectionTitle';
import AssesmentInfo from './assementInfo';
import AssesementCourseList from './assementCourseList';
import styles from '@/styles/AssesementCourse.module.css';

export default function AssesementCourse() {
  return (
    <Layout title='Assesement Course'>
      <section className={styles.Acourse}>
        <Container fluid>
          <Row>
            <Col lg={10} className='mx-auto pt-3'>
              <div className={styles.acourse}>
                <Link href='/jobs/details-two'>
                  <a>
                    <BsArrowLeft />
                  </a>
                </Link>
                <SectionTitle title='Assesement Course' />
              </div>

              <AssesmentInfo />
              <AssesementCourseList />
            </Col>

            <Col lg={10} className='d-grid gap-2 pt-lg-1 mb-5 mx-auto'>
              <Link href='/assement/course-one'>
                <a className='btn btn-primary btn-lg fs-6'>Take course</a>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
