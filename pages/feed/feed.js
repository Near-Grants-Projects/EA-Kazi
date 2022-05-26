import { Col } from 'react-bootstrap';
import Link from 'next/link';
import DashboardForm from 'pages/dashboardForm/dashboardForm';
import ListType from 'pages/listType/listType';
import ListInfo from 'pages/dashboardContent/listInfo';
import Job from 'pages/recommeded/Job';

import styles from '@/styles/Feed.module.css';

export default function Feed() {
  return (
    <div className={styles.feed}>
      <Col lg={8} xl={10} xxl={10} className='ms-auto mt-4'>
        <DashboardForm />
        <ListInfo />
        <ListType />
        <Job />

        <div className='d-grid gap-2'>
          <Link href='/profile'>
            <a className='btn btn-outline-primary btn-lg mt-3 mx-4'>Next</a>
          </Link>
        </div>
      </Col>
    </div>
  );
}
