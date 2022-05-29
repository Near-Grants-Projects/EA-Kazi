import { Container, Row, Col, Form } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { BsArrowLeft, BsCloudUpload } from 'react-icons/bs';
import SectionTitle from '@/section/sectionTitle';
import styles from '@/styles/CourseBuilder.module.css';

export default function CourseBuilder() {
  return (
    <Layout title='Course Builder'>
      <section className='builder'>
        <Container>
          <Row>
            <Col lg={10} className='mx-auto'>
              <div className={styles.builder}>
                <Link href='/trainer/settings' className='d-flex me-5 mt-4'>
                  <a>
                    <BsArrowLeft />
                  </a>
                </Link>
                <SectionTitle title='Course Builder' />
              </div>

              <form className='mt-4'>
                <div className={styles.fbuilder}>
                  <label htmlFor='topic' className='form-label fw-bold'>
                    Add topic
                  </label>
                  <input
                    type='text'
                    placeholder='Topic name'
                    className='form-control form-control-lg fs-6'
                  />

                  <textarea
                    className='form-control form-control-lg mt-4 fs-6'
                    placeholder='Topic summary'
                  ></textarea>

                  <div className='mt-4'>
                    <label htmlFor='paid' className='form-label fw-bold'>
                      Add video
                    </label>
                    <select className='form-select form-select-lg mb-4 fs-6'>
                      <option>Select video source</option>
                    </select>
                  </div>

                  <div className={styles.bdotted}>
                    <BsCloudUpload />
                    <p>Click to browse or drag and drop your files</p>
                  </div>

                  <div className='col-lg-12 px-1 d-grid gap-2 mt-4'>
                    <Link href='/trainer/course-builder-two'>
                      <a className='btn btn-primary btn-lg fs-6'>Next</a>
                    </Link>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
