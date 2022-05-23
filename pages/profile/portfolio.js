import Image from 'next/image';
import { BsDot } from 'react-icons/bs';
import Link from 'next/link';
import styles from '@/styles/Portfolio.module.css';

export default function PortfolioPage() {
  return (
    <>
      <div className='row'>
        <div className='col-lg-10 mx-auto mt-4'>
          <div className={styles.proportfolio}>
            <h4>Portfolio</h4>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row ms-lg-0'>
          <div className='col-lg-10 d-flex mb-4 px-0'>
            <div className={styles.proimage}>
              <Image
                src={'/images/portfolio1.png'}
                width={200}
                height={200}
                objectFit='contain'
                alt='portfolio'
              />
            </div>

            <div className={styles.proimageOne}>
              <Image
                src={'/images/portfolio2.png'}
                width={160}
                height={150}
                objectFit='contain'
                alt='portfolio'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio list */}
      <div className='row'>
        <div className='col-lg-10 mx-auto'>
          <div className={styles.prolist}>
            <h4>Portfolio</h4>
          </div>
        </div>
      </div>

      <div className='container mb-4'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className={styles.proitem}>
              <div>
                <div className='d-flex'>
                  <div className='circular me-3'>
                    <Image
                      src={'/port-circle.png'}
                      width={60}
                      height={60}
                      objectFit='contain'
                    />
                  </div>

                  <div className='d-flex flex-column'>
                    <h4 className='mt-2'>Porfessional UX Desing Certificate</h4>
                    <p>
                      Jelafrica
                      <BsDot /> Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mb-4'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className={styles.proitem}>
              <div>
                <div className='d-flex'>
                  <div className='circular me-3'>
                    <Image
                      src={'/port-circle.png'}
                      width={60}
                      height={60}
                      objectFit='contain'
                    />
                  </div>

                  <div className='d-flex flex-column'>
                    <h4 className='mt-2'>Porfessional UX Desing Certificate</h4>
                    <p>
                      Jelafrica
                      <BsDot /> In-Progress 75% completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mb-4'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className={styles.proitem}>
              <div>
                <div className='d-flex'>
                  <div className='circular me-3'>
                    <Image
                      src={'/port-circle.png'}
                      width={60}
                      height={60}
                      objectFit='contain'
                    />
                  </div>

                  <div className='d-flex flex-column'>
                    <h4 className='mt-2'>Porfessional UX Desing Certificate</h4>
                    <p>
                      Jelafrica
                      <BsDot /> In-Progress 75% completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mb-4'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className={styles.proitem}>
              <div>
                <div className='d-flex'>
                  <div className='circular me-3'>
                    <Image
                      src={'/port-circle.png'}
                      width={60}
                      height={60}
                      objectFit='contain'
                    />
                  </div>

                  <div className='d-flex flex-column'>
                    <h4 className='mt-2'>Porfessional UX Desing Certificate</h4>
                    <p>
                      Jelafrica
                      <BsDot /> In-Progress 75% completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Remove button later */}
      <div className='col-lg-10 mx-auto d-grid gap-2 mb-5 mt-4'>
        <Link href='/wallet'>
          <a className='btn btn-outline-primary btn-lg'>Next</a>
        </Link>
      </div>
    </>
  );
}
