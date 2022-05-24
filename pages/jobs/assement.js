import Layout from '@/components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { BsArrowLeft, BsDash } from 'react-icons/bs';
import styles from '@/styles/JobDetails.module.css';

export default function Assement() {
  const router = useRouter();

  return (
    <Layout title='Job Details'>
      <div className='container-fluid px-4'>
        <div className='row'>
          <div className='col-lg-10 mx-auto mt-4'>
            <div className={styles.jobdetails}>
              <Link href='/wallet' className='d-flex me-5 mt-4'>
                <a>
                  <BsArrowLeft />
                </a>
              </Link>

              <div className='text-center'>
                <h2>Job Details</h2>
              </div>
            </div>

            <div className='text-center'>
              <div>
                <Image
                  src={'/images/jelurida.png'}
                  width={80}
                  height={80}
                  objectFit='contain'
                  alt='company-logo'
                />
              </div>

              <div className={styles.jobinfo}>
                <h3>UI designer</h3>
                <span>Jelafrica</span> <BsDash />
                <span>Nigeria</span> <BsDash />
                <span>Full Time</span>
              </div>

              {/* Remove this later */}
              <div className='col-lg-10 mx-auto mt-4 fs-6'>
                <div className='d-flex justify-content-center shadow-sm p-2 rounded'>
                  <button
                    onClick={() => router.push('/jobs')}
                    className='btn btn-light'
                  >
                    Description
                  </button>
                  <button
                    onClick={() => router.push('/jobs/assement')}
                    className='btn btn-dark ms-2'
                  >
                    Asesement
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-10 mx-auto mt-4'>
            <div className={styles.desc}>
              <h4>Assessment</h4>
              <p>
                To apply for this job you need to take the assessment course,
                pass the quiz and get a certificate to proove proficiency. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <p>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequatLorem ipsum dolor sit amet, consectetur
                adipiscing ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>

          {/* Remove button later */}
          <div className='col-lg-10 mx-auto d-grid gap-2 mb-5 mt-4'>
            <Link href='/jobs/details-two'>
              <a className='btn btn-primary btn-lg fs-6'>Take Course</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
