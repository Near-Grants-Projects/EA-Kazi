import { Container, Row, Col, Form } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

export default function DashboardForm() {
  return (
    <div className='dashboardForm'>
      <Container>
        <Row>
          <Col lg={12} className='mt-4 ms-lg-2'>
            <h1 className='fs-3 fw-bold'>Hi, Marv</h1>
            <Form>
              <div className='wrapper'>
                <div className='icon'>
                  <BsSearch />
                </div>
                <Form.Control
                  className='text-secondary fs-6'
                  type='text'
                  placeholder='e.g Game development jobs...'
                />
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
