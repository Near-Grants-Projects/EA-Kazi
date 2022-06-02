import { Col } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/components/Layout';
import EmployerForm from '@/components/EmployerForm/EmployerForm';
import Badge from '@/components/DashboardBadge/Badge';
import Sidebar from '@/components/Sidebar';
import PublishJobs from 'pages/employer/publishJobs';
import ListInfo from '@/components/DashboardTop/ListInfo';

export default function Trainer() {
  return (
    <Layout title='Trainer'>
      <div className='trainer px-3'>
        <Sidebar />
        <Col lg={8} className='mx-auto'>
          <EmployerForm />
          <ListInfo />
          <Badge />
          <PublishJobs />

          <div className='text-center'>
            <Link href='/trainer/page-one'>
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
