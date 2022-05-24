import { Col } from 'react-bootstrap';
import { job } from '../../data';
import styles from '@/styles/JobDetails.module.css';

export default function JobDescription() {
  return (
    <Col lg={10} className='mx-auto mt-4'>
      <div className={styles.desc}>
        <h4>Job Description</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quis
          asperiores dolorum eaque doloribus aliquam nihil veniam optio. Quam
          neque, quae totam enim unde libero ratione nostrum eius laborum animi.
        </p>
      </div>

      <div className={styles.desc}>
        <h4 className='mt-4'>Skills Required</h4>
        <li>
          Interest or experience in designing for emerging markets and new
          internet users.
        </li>
        <li>
          Strong core mobile interaction design skills to solve complex user
          flows and visually organized data.
        </li>
        <li>Solid command of typography, layout</li>
      </div>
    </Col>
  );
}
