import { HiOutlineChevronRight } from 'react-icons/hi';
import Image from 'next/image';
import styles from '@/styles/Wallet.module.css';

export default function TransactionList({ item }) {
  const { img, text } = item;

  return (
    <div className='col-lg-10 mx-auto p-4'>
      <div className={styles.wabg}>
        <div className='d-flex'>
          <div className={styles.position}>
            <div className={styles.waicon}>
              <Image
                src={img}
                width={20}
                height={20}
                objectFit='contain'
                alt='withdrawal-icon'
              />
            </div>
          </div>

          <div className={styles.withdrawal}>
            <h4>{text}</h4>
          </div>

          <div className='ms-auto text-secondary'>
            <HiOutlineChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
