import { Container, Col, Form, Group, Label, Button } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/components/Layout';
import CardTitle from './cardTitle';

export default function Login() {
  return (
    <Layout title='Sign In'>
      <div className='login'>
        <Container>
          <Col lg={6} className='mx-auto p-4'>
            <div className='card card-body shadow-sm p-4'>
              <CardTitle
                title='Sign In'
                text='Sign in to your EA Kazi account'
              />
              <Form>
                <Form.Group className='mb-4'>
                  <Form.Control type='email' placeholder='Email address' />
                </Form.Group>

                <Form.Group className='mb-4'>
                  <Form.Control type='password' placeholder='Password' />
                </Form.Group>
                <div className='mb-3 d-flex justify-content-end'>
                  <Link href='#'>
                    <a className='text-secondary'> Forgot your password?</a>
                  </Link>
                </div>

                <div className='d-grid gap-2'>
                  <Button size='lg' className='fs-6'>
                    Sign in
                  </Button>
                  <p className='text-secondary text-center'>
                    Don't have an account?
                    <Link href='/account/register'>
                      <a className='ms-1'>Sign up</a>
                    </Link>
                  </p>
                </div>
              </Form>
            </div>
          </Col>
        </Container>
      </div>
    </Layout>
  );
}
