import { useState } from 'react';
import { Modal, Form, Group, Label, Button } from 'react-bootstrap';
import Link from 'next/link';
import ModalTitle from './ModalTitle';
import styles from '@/styles/Modal.module.css';

export default function SignInModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className={styles.navBtn}>
        Sign in
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className={styles.border} />
        <Modal.Body className='mb-5 px-4'>
          <ModalTitle />

          <Form>
            <Form.Group className='mb-3'>
              <Form.Control
                type='email'
                placeholder='Email address'
                autoFocus
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control type='password' placeholder='Password' />
              <Form.Text className='mt-2 d-flex justify-content-end'>
                Forgot your password?
              </Form.Text>
            </Form.Group>
            <div className='d-grid gap-2'>
              <Button className={styles.loginBtn}>Sign in</Button>
              <p className='text-secondary text-center'>
                Don't have an account?
                <Link href='#'>
                  <a className='ms-1'>Signup</a>
                </Link>
              </p>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
