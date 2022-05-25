import { Container, Row, Col } from 'react-bootstrap';
import Layout from '@/components/Layout';
import { BsSearch } from 'react-icons/bs';

export default function DashboardForm() {
  return (
    <Layout title='Employer'>
      <div className='dashboardForm'>
        <Container>
          <Row>
            <Col lg={12} className='pt-5 ms-lg-2'>
              <h1 className='fs-3 fw-bold pt-3'>Hi, Marv</h1>
              <form>
                <div className='wrapper'>
                  <div className='icon'>
                    <BsSearch />
                  </div>

                  <input
                    type='text'
                    className='form-control form-control-lg text-secondary fs-6'
                    placeholder='e.g Game development jobs...'
                  />
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
