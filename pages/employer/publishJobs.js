import { Col } from 'react-bootstrap';
import Link from 'next/link';
import { BiErrorCircle } from 'react-icons/bi';
import Title from '@/components/Title';
import styles from '@/styles/PublishJobs.module.css';

export default function PublishJobs() {
  return (
    <>
      <Title title='Publish Courses' info='See all' />
      <Col className='mt-4'>
        <div className={styles.apublish}>
          <BiErrorCircle />
          <p className='mt-2'>You have no published Jobs yet..</p>
        </div>
      </Col>
    </>
  );
}
