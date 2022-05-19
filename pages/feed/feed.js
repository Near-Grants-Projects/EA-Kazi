import { Col } from 'react-bootstrap';
import DashboardForm from 'pages/dashboardForm/dashboardForm';
import DashboardContent from 'pages/dashboardContent/dashboardContent';
import styles from '@/styles/Feed.module.css';
import ListInfo from 'pages/dashboardContent/listInfo';

export default function Feed() {
  return (
    <div className={styles.feed}>
      <Col lg={8} xl={10} xxl={10} className='ms-auto mt-4'>
        <DashboardForm />
        <ListInfo />
        {/* <DashboardContent /> */}
        {/* Scrollable2 */}
        {/* Recommeded jobs */}
      </Col>
    </div>
  );
}
