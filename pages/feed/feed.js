import { Col } from 'react-bootstrap';
import DashboardForm from 'pages/dashboardForm/dashboardForm';
import styles from '@/styles/Feed.module.css';

export default function Feed() {
  return (
    <div className={styles.feed}>
      <Col lg={8} xl={10} xxl={10} className='ms-auto mt-4'>
        <DashboardForm />
        {/* Scrollable1 */}
        {/* Scrollable2 */}
        {/* Recommeded jobs */}
      </Col>
    </div>
  );
}
