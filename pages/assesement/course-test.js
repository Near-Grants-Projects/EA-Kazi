import Link from 'next/link';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { BsArrowLeft, BsYoutube, BsStarFill, BsDot } from 'react-icons/bs';
import styles from '@/styles/AssesementCourse.module.css';

export default function AssesementCoursePage() {
  return (
    <Layout title='Assesement Course'>
      <div className='container-fluid px-4'>
        <div className='row'>
          <div className='col-lg-10 mx-auto mt-4'>
            <div className={styles.acourse}>
              <Link href='/jobs/details-two' className='d-flex me-5 mt-4'>
                <a>
                  <BsArrowLeft />
                </a>
              </Link>

              <div>
                <h2 className='text-center'>Assesement Course</h2>
              </div>
            </div>

            <div className={styles.acompany}>
              <div>
                <Image
                  src={'/jelurida.png'}
                  width={60}
                  height={60}
                  objectFit='contain'
                />
              </div>

              <div className='ms-2'>
                <h3>Jelafrica</h3>
                <p>Tutor</p>
              </div>
            </div>

            <div className={styles.youtube}>
              <div className={styles.rcolor}>
                <BsYoutube />
              </div>

              <div className={styles.adesign}>
                <h4>Web Design: Strategy and Information Architecture</h4>
                <p>NGN 50.000</p>
                <div className={styles.astar}>
                  <div className={styles.aspan}>
                    <BsStarFill className={styles.yelstar} />
                    <span className='text-dark fw-bold'>4.5</span> <BsDot />
                    <span>By Jelafrica</span> <BsDot />
                    <span>All level</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-10 mx-auto d-grid gap-2 mb-5 mt-4'>
            <Link href='#'>
              <a className='btn btn-primary btn-lg fs-6'>Take course</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
