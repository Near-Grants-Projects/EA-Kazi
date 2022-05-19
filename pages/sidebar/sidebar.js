import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { BiHomeCircle } from 'react-icons/bi';
import { BsPower, BsBriefcase } from 'react-icons/bs';
import SidebarOption from 'pages/sidebarOption/sidebarOption';
import styles from '@/styles/Sidebar.module.css';

export default function Sidebar() {
  return (
    <Col sm={12} md={12} lg={2} xxl={12} className={styles.sidebar}>
      <Link href='#'>
        <a>
          <SidebarOption text='Home' Icon={BiHomeCircle} />
        </a>
      </Link>
      <Link href='#'>
        <a>
          <SidebarOption text='Jobs' Icon={BsBriefcase} />
        </a>
      </Link>
      <Link href='#'>
        <a>
          <SidebarOption text='Logout' Icon={BsPower} />
        </a>
      </Link>
    </Col>
  );
}
