import { Container, Row, Col, Form } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { BsArrowLeft, BsCloudUpload } from 'react-icons/bs';
import Image from 'next/image';
import styles from '@/styles/CourseBuilder.module.css';

export default function CourseBuilderTwo() {
  return (
    <Layout title='Course Builder'>
      <section className='builder'>
        <Container>
          <Row>
            <Col lg={10} className='mx-auto'>
              <div className={styles.builder}>
                <Link
                  href='/trainer/course-builder'
                  className='d-flex me-5 mt-4'
                >
                  <a>
                    <BsArrowLeft />
                  </a>
                </Link>

                <div className='text-center'>
                  <h2>Course Builder</h2>
                </div>
              </div>

              <form className='mt-4'>
                <div className={styles.fbuilder}>
                  <label htmlFor='topic' className='form-label fw-bold'>
                    Add topic
                  </label>
                  <input
                    type='text'
                    placeholder='Strategy and Information architecture'
                    className='form-control form-control-lg fs-6'
                  />

                  <textarea
                    className='form-control form-control-lg mt-4 fs-6'
                    placeholder='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quas reiciendis voluptatibus non aspernatur maiores deleniti, tempore exercitationem? Impedit facilis laboriosam corporis iure pariatur optio sapiente illum ea. Cupiditate, dicta.'
                  ></textarea>

                  <div className='mt-4'>
                    <label htmlFor='paid' className='form-label fw-bold'>
                      Add video
                    </label>
                    <select className='form-select form-select-lg mb-4 fs-6'>
                      <option>Upload video</option>
                    </select>
                  </div>

                  <div className={styles.bdotted}>
                    <BsCloudUpload />
                    <p>Click to browse or drag and drop your files</p>
                  </div>

                  <div className={styles.cimg}>
                    <Image
                      src={'/images/card.png'}
                      width={700}
                      height={700}
                      objectFit='contain'
                    />
                  </div>

                  <div className='col-lg-12 px-1 d-grid gap-2'>
                    <Link href='/success/trainer-success'>
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
