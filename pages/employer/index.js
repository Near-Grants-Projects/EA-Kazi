import { Col } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/components/Layout';
import EmployerForm from 'pages/employer/employerForm';
import Badge from '@/components/DashboardBadge/Badge';
import Sidebar from '@/components/Sidebar';
import PublishJobs from './publishJobs';
import ListInfo from '@/components/DashboardTop/ListInfo';

export default function Employer() {
  return (
    <Layout title='Employer'>
      <div className='employer px-3'>
        <Sidebar />
        <Col lg={8} className='mx-auto'>
          <EmployerForm />
          <ListInfo />
          <Badge />
          <PublishJobs />

          <div className='text-center'>
            <Link href='/create-course/page-one'>
              <a className='btn btn-link text-secondary'>
                Click create a course to get started
              </a>
            </Link>
          </div>
        </Col>
      </div>
    </Layout>
  );
}
