import { Container } from 'react-bootstrap';
import { jobs } from '../../data';
import JobList from './jobList';
import Title from './Title';
import styles from '@/styles/JobList.module.css';

export default function Job() {
  return (
    <Container>
      <Title title='Recommended' info='See all' />
      <div className={styles.grid}>
        {jobs.map((job) => (
          <JobList key={job.id} job={job} />
        ))}
      </div>
    </Container>
  );
}
