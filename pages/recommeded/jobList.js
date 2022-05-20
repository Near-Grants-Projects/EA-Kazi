import { Container, Row, Col } from 'react-bootstrap';
import Title from './Title';
import styles from '@/styles/JobList.module.css';

export default function JobList({ job }) {
  const { type, company, role, time, img } = job;

  return (
    <Container>
      <div className={styles.gridC}>
        <div>
          <div>
            <img src={img} className='mb-3' />
          </div>

          <div className={styles.gOne}>
            <h2 className={styles.gTwo}>{job.company}</h2>
            <h6 className={styles.gImg}>{time}</h6>
          </div>

          <div className={styles.gThree}>
            <h4 className='text-secondary'>{job.role}</h4>
            <h5 className='fs-6'>{job.type}</h5>
          </div>
        </div>
      </div>
    </Container>
  );
}
