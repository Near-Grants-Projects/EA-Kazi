import { Container } from 'react-bootstrap';
import { publishJobs } from '../../data';
import PublishJobList from './publishedJobList';

export default function PublishedJobs() {
  return (
    <Container>
      {publishJobs.map((item) => (
        <PublishJobList key={item.id} item={item} />
      ))}
    </Container>
  );
}
