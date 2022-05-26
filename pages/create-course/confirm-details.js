import { Container, Row, Col, Form } from 'react-bootstrap';
import Link from 'next/link';
import { details } from 'data';
import Layout from '@/components/Layout';
import { BsArrowLeft } from 'react-icons/bs';
import SectionTitle from '@/section/sectionTitle';
import styles from '@/styles/CreateCourse.module.css';

export default function ConfirmDetails() {
  return (
    <Layout title='Confirm Details'>
      <section className='pageThree'>
        <Container>
          <Row>
            <Col lg={6} className='mx-auto'>
              <div className={styles.course}>
                <Link href='/create-course/page-three'>
                  <a>
                    <BsArrowLeft />
                  </a>
                </Link>
                <SectionTitle title='Confirm Details' />
              </div>
              <div className='mt-4 text-center'>
                <SectionTitle title='Kindly confirm that all the details are correct' />
              </div>

              <Col lg={6} className='mx-auto'>
                {details.map((item) => (
                  <div key={item.id}>
                    <div className='mt-4'>
                      <img src={item.img} alt='details' className='img-fluid' />
                      <h4 className='mt-4'>{item.title}</h4>
                    </div>
                    <div className='my-4'>
                      <span className='border text-dark fw-bold p-2 rounded'>
                        {item.amount}
                      </span>
                    </div>

                    <ul className='text-secondary mt-2 ps-0'>
                      {item.text.map((txt, index) => (
                        <li key={index}>{txt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Col>

              <Col lg={6} className='mx-auto'>
                <Link href='/success/course-success'>
                  <a className='btn btn-primary btn-lg'>Post project</a>
                </Link>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
