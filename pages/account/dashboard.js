import { Col } from 'react-bootstrap';
import Sidebar from 'pages/sidebar/sidebar';
import Feed from 'pages/feed/feed';

export default function Dashboard() {
  return (
    <Col xl={11} className='mx-auto'>
      <Sidebar />
      <Feed />
    </Col>
  );
}
