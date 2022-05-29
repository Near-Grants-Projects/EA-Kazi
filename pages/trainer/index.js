import { Col } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/components/Layout';
import EmployerForm from 'pages/employer/employerForm';
import ListType from 'pages/listType/listType';
import Sidebar from 'pages/sidebar/sidebar';
import PublishJobs from 'pages/employer/publishJobs';
import ListInfo from 'pages/dashboardContent/listInfo';

export default function Trainer() {
  return (
    <Layout title='Trainer'>
      <div className='trainer px-5'>
        <Sidebar />
        <Col lg={8} className='mx-auto'>
          <EmployerForm />
          <ListInfo />
          <ListType />
          <PublishJobs />

          <div className='text-center'>
            <Link href='/trainer/page-one'>
              <a className='btn btn-primary'>Next</a>
            </Link>
          </div>
        </Col>
      </div>
    </Layout>
  );
}
