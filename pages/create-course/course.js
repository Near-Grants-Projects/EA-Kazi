import { Col } from 'react-bootstrap';
import ListInfo from 'pages/dashboardContent/listInfo';
import DashboardForm from 'pages/dashboardForm/dashboardForm';
import ListType from 'pages/listType/listType';
import Sidebar from 'pages/sidebar/sidebar';
import PublishJobs from 'pages/employer/publishJobs';
import Title from '@/components/Title';
import AssesementCourseList from 'pages/assement/assementCourseList';

export default function PostedCourse() {
  return (
    <div className='employer px-5'>
      <Sidebar />
      <Col lg={8} className='mx-auto'>
        <DashboardForm />
        <ListInfo />
        <ListType />
        <Title title='Published Jobs' info='See all' />
        <AssesementCourseList />
      </Col>
    </div>
  );
}
