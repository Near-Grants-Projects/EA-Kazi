import { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Col, Form, Group, Label, Button } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/components/Layout';
import CardTitle from './cardTitle';

export default function Register() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [employer] = useState('employer');
  const [trainer] = useState('trainer');

  const handleClick = (e) => {
    if (value === employer) {
      router.push('/employer');
    } else {
      router.push('/trainer');
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Layout title='Sign Up'>
      <div className='register'>
        <Container>
          <Col lg={6} className='mx-auto p-4'>
            <div className='card card-body shadow-sm p-4'>
              <CardTitle
                title='Sign Up'
                text='Sign up for an EA Kazi account'
              />
              <Form>
                <Form.Group className='mb-4'>
                  <Form.Control type='text' placeholder='Full name' />
                </Form.Group>

                <Form.Group className='mb-4'>
                  <Form.Control type='email' placeholder='Email address' />
                </Form.Group>

                <Form.Select
                  className='mb-4 fs-6 text-secondary'
                  size='lg'
                  onChange={onChange}
                >
                  <option>Sign up as</option>
                  <option value={employer}>Employer</option>
                  <option value={trainer}>Trainer</option>
                </Form.Select>

                <Form.Group className='mb-4'>
                  <Form.Control type='password' placeholder='Password' />
                </Form.Group>

                <div className='d-grid gap-2 '>
                  <Button onClick={handleClick} size='lg' className='fs-6'>
                    Create an account
                  </Button>
                  <p className='text-secondary text-center'>
                    Already have an account?
                    <Link href='/account/login'>
                      <a className='ms-1'>Sign in</a>
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
