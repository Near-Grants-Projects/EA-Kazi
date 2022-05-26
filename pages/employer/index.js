import { Col } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/components/Layout';
import EmployerForm from 'pages/employer/employerForm';
import ListType from 'pages/listType/listType';
import Sidebar from 'pages/sidebar/sidebar';
import PublishJobs from './publishJobs';
import ListInfo from 'pages/dashboardContent/listInfo';

export default function Employer() {
  return (
    <div className='employer px-5'>
      <Sidebar />
      <Col lg={8} className='mx-auto'>
        <EmployerForm />
        <ListInfo />
        <ListType />
        <PublishJobs />

        <div className='text-center'>
          <Link href='/create-course'>
            <a className='btn btn-primary'>Next</a>
          </Link>
        </div>
      </Col>
    </div>
  );
}
