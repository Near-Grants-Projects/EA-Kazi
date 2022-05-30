import { Container } from 'react-bootstrap';
import { publishJobs } from '../../data';
import PublishJobList from './publishedJobList';

export default function PublishedJobs() {
  return (
    <Container className='px-4 mt-4'>
      {publishJobs.map((item) => (
        <PublishJobList key={item.id} item={item} />
      ))}
    </Container>
  );
}
