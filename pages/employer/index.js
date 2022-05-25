import { Col } from 'react-bootstrap';
import Layout from '@/components/Layout';
import EmployerForm from 'pages/employer/employerForm';
import ListType from 'pages/listType/listType';
import Sidebar from 'pages/sidebar/sidebar';
import PublishJobs from './publishJobs';

export default function Employer() {
  return (
    <div className='employer px-5'>
      <Sidebar />
      <Col lg={8} className='mx-auto'>
        <EmployerForm />
        <ListType />
        <PublishJobs />
      </Col>
    </div>

    // <Layout title='Employer'>
    //   <DashboardForm />
    //   <ListType />
    //   <ListInfo />
    //   {/* tab1 */}
    //   {/* tab2 */}
    //   {/* title */}
    //   {/* info */}
    // </Layout>
  );
}
