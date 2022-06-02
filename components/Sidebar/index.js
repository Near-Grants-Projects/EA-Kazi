import { Col } from 'react-bootstrap';
import Link from 'next/link';
import { BiHomeCircle } from 'react-icons/bi';
import { BsPower, BsBriefcase } from 'react-icons/bs';
import SidebarLink from '@/components/SidebarLink/SidebarLink';
import styles from '@/styles/Sidebar.module.css';

export default function Sidebar() {
  return (
    <Col sm={12} md={12} lg={2} xxl={12} className={styles.sidebar}>
      <div className={styles.dLogo}>
        <img
          src='https://res.cloudinary.com/dpxs9ause/image/upload/v1653995794/ea-kazi/logo1_higbdk.png'
          alt='logo'
        />
      </div>
      <Link href='/employer'>
        <a>
          <SidebarLink text='Home' Icon={BiHomeCircle} />
        </a>
      </Link>
      <Link href='/jobs'>
        <a>
          <SidebarLink text='Jobs' Icon={BsBriefcase} />
        </a>
      </Link>
      <Link href='/'>
        <a>
          <SidebarLink text='Logout' Icon={BsPower} />
        </a>
      </Link>
    </Col>
  );
}
