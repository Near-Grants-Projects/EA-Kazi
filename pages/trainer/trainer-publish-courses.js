import { Col } from 'react-bootstrap';
import Layout from '@/components/Layout';
import EmployerForm from 'pages/employer/employerForm';
import ListType from 'pages/listType/listType';
import Sidebar from 'pages/sidebar/sidebar';
import ListInfo from 'pages/dashboardContent/listInfo';
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
          <ListType />
          <Title title='Published Courses' info='See all' />
          <PublishedCourses />
        </Col>
      </div>
    </Layout>
  );
}
