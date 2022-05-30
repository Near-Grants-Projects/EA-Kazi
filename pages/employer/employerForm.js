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
              <div className='wrapper me-4'>
                <div className='icon'>
                  <BsSearch />
                </div>
                <Form.Control
                  className='text-secondary fs-6'
                  type='text'
                  placeholder='e.g design jobs'
                />
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
