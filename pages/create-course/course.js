import { Col } from 'react-bootstrap';
import EmployerForm from '@/components/EmployerForm/EmployerForm';
import ListInfo from '@/components/DashboardTop/ListInfo';
import DashboardBadge from '@/components/DashboardBadge/Badge';
import Sidebar from '@/components/Sidebar';
import PublishJobs from 'pages/employer/publishJobs';
import Title from '@/components/Title';
import PublishedJobs from './publishedJobs';

export default function PostedCourse() {
  return (
    <div className='employer px-5'>
      <Sidebar />
      <Col lg={8} className='mx-auto'>
        <EmployerForm />
        <ListInfo />
        <DashboardBadge />
        <Title title='Published Jobs' info='See all' />
        <PublishedJobs />
      </Col>
    </div>
  );
}
