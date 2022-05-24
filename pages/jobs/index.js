import { Container, Row, Col, Button } from 'react-bootstrap';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { job } from '../../data';
import { BsArrowLeft } from 'react-icons/bs';
import styles from '@/styles/JobDetails.module.css';
import SectionTitle from '@/section/sectionTitle';
import JobDetailsHeader from './jobDetailsHeader';
import JobDescription from './jobDescription';

export default function JobDetailsPage() {
  const router = useRouter();

  return (
    <Layout title='Job Details'>
      <Container fluid className='px-4'>
        <Row>
          <Col lg={10} className='mx-auto mt-4'>
            <div className={styles.jobdetails}>
              <Link href='/wallet' className='d-flex me-5 mt-4'>
                <a>
                  <BsArrowLeft />
                </a>
              </Link>
              <SectionTitle title='Job Details' />
            </div>

            <div className='text-center'>
              <JobDetailsHeader />
              {/* Remove this later */}
              <Col lg={10} className='mx-auto mt-4 fs-6'>
                <div className='d-flex justify-content-center shadow-sm p-2 rounded'>
                  <Button variant='dark'>Description</Button>
                  <Button
                    onClick={() => router.push('/jobs/assement')}
                    className='ms-2'
                    variant='primary'
                  >
                    Asesement
                  </Button>
                </div>
              </Col>
            </div>
          </Col>

          <JobDescription />
          {/* Remove button later */}
          <div className='col-lg-10 mx-auto d-grid gap-2 mb-5 mt-4'>
            <Link href='/jobs/details-two'>
              <a className='btn btn-primary btn-lg fs-6'>Apply Now</a>
            </Link>
          </div>
        </Row>
      </Container>
    </Layout>
  );
}
