import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { BsArrowLeft } from 'react-icons/bs';
import SectionTitle from '@/section/sectionTitle';
import styles from '@/styles/ProfileHeader.module.css';

export default function ProfileHeader() {
  return (
    <Row>
      <Col lg={10} className='mx-auto mt-4'>
        <div className={styles.profileHeader}>
          <Link href='/account/dashboard' className='d-flex me-5 mt-4'>
            <a>
              <BsArrowLeft />
            </a>
          </Link>

          <SectionTitle title='Profile' />
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

          <div className='ms-4'>
            <h3>marvelous IK</h3>
            <h4>UI/UX Designer</h4>

            <div className={styles.margin}>
              <Link href='#'>
                <a>Edit Profile</a>
              </Link>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
