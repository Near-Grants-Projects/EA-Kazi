import Link from 'next/link';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { BsArrowLeft, BsYoutube, BsStarFill, BsDot } from 'react-icons/bs';
import styles from '@/styles/CourseOne.module.css';

export default function AssesementCourseTwoPage() {
  return (
    <Layout title='Assesement Course'>
      <div className='container-fluid px-4'>
        <div className='row'>
          <div className='col-lg-10 mx-auto mt-4'>
            <div className={styles.acourseOne}>
              <Link href='/assesement' className='d-flex me-5 mt-4'>
                <a>
                  <BsArrowLeft />
                </a>
              </Link>

              <div>
                <h2 className='text-center'>Assesement Course</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6 col-md-10 mx-auto'>
            <div className={styles.aframe}>
              <Image
                src={'/card.png'}
                width={700}
                height={700}
                objectFit='contain'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className={styles.up}>
          <div className='d-flex justify-content-center'>
            <div className='bg-white p-4'>
              <h2>Course Content</h2>
            </div>

            <div className='bg-light p-4'>
              <h2>Transcript</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid mt-5 shadow-lg'>
        <div className={styles.acourses}>
          <div className={styles.awelcome}>
            <h3>Section 1: Welcome to Jelurida UI/UX course</h3>
            <p>
              <span>
                Video <BsDot /> 14mins
              </span>
            </p>
          </div>
        </div>

        <div className={styles.acourses}>
          <div className={styles.awelcome}>
            <h3>Section 2: Foundations of UX Design</h3>
            <p>
              <span>
                Reading <BsDot /> 14mins
              </span>
            </p>
          </div>
        </div>

        <div className={styles.acourses}>
          <div className={styles.awelcome}>
            <h3>Section 3: The basics of User experience design</h3>
            <p>
              <span>
                Video <BsDot /> 30mins
              </span>
            </p>
          </div>
        </div>

        <div className={styles.acourses}>
          <div className={styles.awelcome}>
            <h3>Section 4 : Product development lifecycle</h3>
            <p>
              <span>
                Video <BsDot /> 14mins
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className='col-lg-12 px-1 d-grid gap-2 mt-3 mb-5'>
        <Link href='/publish'>
          <a className='btn btn-primary btn-lg fs-6'>Next</a>
        </Link>
      </div>
    </Layout>
  );
}
