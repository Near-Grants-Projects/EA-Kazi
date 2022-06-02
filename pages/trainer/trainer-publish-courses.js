import { Col } from 'react-bootstrap';
import Layout from '@/components/Layout';
import EmployerForm from '@/components/EmployerForm/EmployerForm';
import Badge from '@/components/DashboardBadge/Badge';
import Sidebar from '@/components/Sidebar';
import ListInfo from '@/components/DashboardTop/ListInfo';
import Title from '@/components/Title';
import PublishedCourses from 'pages/trainer/publishedCourses';

export default function TrainerPublishedCourses() {
  return (
    <Layout title='Trainer PublishJobs'>
      <div className='trainer px-5'>
        <Sidebar />
        <Col lg={8} className='mx-auto'>
          <EmployerForm />
          <ListInfo />
          <Badge />
          <Title title='Published Courses' info='See all' />
          <PublishedCourses />
        </Col>
      </div>
    </Layout>
  );
}
