import { Col } from 'react-bootstrap';
import Layout from '@/components/Layout';
import EmployerForm from '@/components/EmployerForm/EmployerForm';
import Badge from '@/components/DashboardBadge/Badge';
import Sidebar from '@/components/Sidebar';
import Title from '@/components/Title';
import FreelancerJobs from 'pages/jobs/freelancer-jobs';

export default function Jobs() {
  return (
    <Layout title='Jobs'>
      <div className='jobs px-3'>
        <Sidebar />
        <Col lg={8} className='mx-auto'>
          <EmployerForm />
          <Title title='Categories' info='See all' />
          <Badge />
          <Title title='Recommended' />
          <FreelancerJobs />
        </Col>
      </div>
    </Layout>
  );
}
