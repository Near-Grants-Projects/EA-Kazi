import { BsArrowLeft } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/ProfileHeader.module.css';

export default function ProfileHeader() {
  return (
    <div className='row'>
      <div className='col-lg-10 mx-auto mt-4'>
        <div className={styles.profileHeader}>
          <Link href='/account/dashboard' className='d-flex me-5 mt-4'>
            <a>
              <BsArrowLeft />
            </a>
          </Link>

          <div>
            <h2 className='text-center'>Profile</h2>
          </div>
        </div>

        <div className={styles.profinfo}>
          <div>
            <Image
              src={'/images/profile.png'}
              width={80}
              height={80}
              objectFit='contain'
            />
          </div>

          <div className='info ms-4'>
            <h3>marvelous IK</h3>
            <h4>UI/UX Designer</h4>
            {/* wrap a div around a link to enable adding styling */}
            <div className={styles.margin}>
              <Link href='#'>
                <a>Edit Profile</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
