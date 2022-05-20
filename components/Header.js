import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Modal from './Modal';
import styles from '@/styles/Header.module.css';

export default function Header() {
  const router = useRouter();

  return (
    <Navbar collapseOnSelect expand='md' className='pt-4'>
      <Container>
        <div onClick={() => router.push('/')} className={styles.logoHover}>
          <img src={'/images/logo.png'} className='img-fluid' />
        </div>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto' />
          <Nav className={styles.links}>
            <Link href='/'>
              <a className='me-4'>Home</a>
            </Link>
            <Link href='#'>
              <a className='me-4'>Jobs</a>
            </Link>
            <Link href='#'>
              <a className='me-4'>Courses</a>
            </Link>
            <Link href='#'>
              <a className='me-4'>Contact</a>
            </Link>
            <Link href='#'>
              <a className='me-4'>FAQ</a>
            </Link>

            <div>
              {/* <Button className={styles.navBtn}>Sign in</Button> */}
              <Modal />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
