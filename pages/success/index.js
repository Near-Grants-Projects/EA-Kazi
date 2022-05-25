import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { BsCheckCircleFill, BsArrowLeft } from 'react-icons/bs';
import SectionTitle from '@/section/sectionTitle';
import styles from '@/styles/Success.module.css';

export default function SuccessPage() {
  return (
    <Layout title='Success Page'>
      <div className={styles.success}>
        <Container>
          <Row>
            <Col lg={10} className='mx-auto pt-3'>
              <>
                <Link href='/assement/course-one'>
                  <a>
                    <BsArrowLeft />
                  </a>
                </Link>
                <SectionTitle title='Assesement Course' />
                <div className='text-center mt-4 mb-4'>
                  <BsCheckCircleFill className='fs-1' />
                </div>
                <p className='text-center fw-bold'>Successful</p>
                <div className='text-center'>
                  <NavLink to='/account/dashboard'>Back to home</NavLink>
                </div>
              </>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

function NavLink({ to, children }) {
  return (
    <Link href={to}>
      <a className={`btn btn-primary`}>{children}</a>
    </Link>
  );
}
