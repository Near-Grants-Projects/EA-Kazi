import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsArrowLeft } from 'react-icons/bs';
import { HiOutlineChevronRight } from 'react-icons/hi';
import styles from '@/styles/Wallet.module.css';

export default function WalletPage() {
  const router = useRouter();

  return (
    <Layout title='Wallet'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-10 mx-auto mt-4'>
            <div className={styles.wallet}>
              <Link href='/profile' className='d-flex me-5 mt-4'>
                <a>
                  <BsArrowLeft />
                </a>
              </Link>

              <div>
                <h2 className='text-center'>Wallet</h2>
              </div>
            </div>
          </div>

          <div className='col-lg-10 mx-auto mb-4'>
            <div className={styles.walamount}>
              <h4>#20,600</h4>
              <p>current balance</p>
            </div>
          </div>

          {/* Remove this later */}
          <div className='col-lg-10 mx-auto px-4'>
            <div className='d-flex'>
              <button className='btn btn-secondary btn-lg'>Transactions</button>
              <button
                onClick={() => router.push('/wallet-two')}
                className='btn btn-light btn-lg ms-2'
              >
                Actions
              </button>
            </div>
          </div>

          <div className='col-lg-10 mx-auto p-4'>
            <div className={styles.wabg}>
              <div className='d-flex'>
                <div className={styles.position}>
                  <div className={styles.waicon}>
                    <Image
                      src={'/withdrawal.png'}
                      width={20}
                      height={20}
                      objectFit='contain'
                      alt='withdrawal-icon'
                    />
                  </div>
                </div>

                <div className={styles.withdrawal}>
                  <h4>Withdrawal</h4>
                </div>

                <div className='ms-auto text-secondary'>
                  <HiOutlineChevronRight />
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-10 mx-auto p-4'>
            <div className={styles.wabg}>
              <div className='d-flex'>
                <div className={styles.position}>
                  <div className={styles.waicon}>
                    <Image
                      src={'/deposit.png'}
                      width={20}
                      height={20}
                      objectFit='contain'
                      alt='deposit-icon'
                    />
                  </div>
                </div>

                <div className={styles.withdrawal}>
                  <h4>Deposit</h4>
                </div>

                <div className='ms-auto text-secondary'>
                  <HiOutlineChevronRight />
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-10 mx-auto p-4'>
            <div className={styles.wabg}>
              <div className='d-flex'>
                <div className={styles.position}>
                  <div className={styles.waicon}>
                    <Image
                      src={'/transfer.png'}
                      width={20}
                      height={20}
                      objectFit='contain'
                      alt='transfer-icon'
                    />
                  </div>
                </div>

                <div className={styles.withdrawal}>
                  <h4>Transfer</h4>
                </div>

                <div className='ms-auto text-secondary'>
                  <HiOutlineChevronRight />
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-10 mx-auto p-4'>
            <div className={styles.wabg}>
              <div className='d-flex'>
                <div className={styles.position}>
                  <div className={styles.waicon}>
                    <Image
                      src={'/invoice.png'}
                      width={20}
                      height={20}
                      objectFit='contain'
                      alt='invoice-icon'
                    />
                  </div>
                </div>

                <div className={styles.withdrawal}>
                  <h4>Generate Invoice</h4>
                </div>

                <div className='ms-auto text-secondary'>
                  <HiOutlineChevronRight />
                </div>
              </div>
            </div>
          </div>

          {/* Remove button later */}
          <div className='col-lg-10 mx-auto d-grid gap-2 mb-5 mt-4 px-4'>
            <Link href='/jobs'>
              <a className='btn btn-primary btn-lg fs-6'>Next</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
