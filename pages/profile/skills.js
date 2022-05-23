import { Row, Col } from 'react-bootstrap';
import styles from '@/styles/Skills.module.css';
import Title from './title';

export default function Skills() {
  return (
    <Row>
      <Col lg={10} className='mx-auto mt-4'>
        <Title title='Skills' />

        <Col lg={12}>
          <div className={styles.left}>
            <div className='col-lg-12 d-flex flex-wrap align-items-center'>
              <span>UI/UX</span>
              <span>Front-End Dev</span>
              <span>Figma</span>
              <span className={styles.pink}>Adobe XD</span>
            </div>
          </div>
        </Col>
      </Col>
    </Row>
  );
}
