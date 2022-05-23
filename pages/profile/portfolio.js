import { Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { portfolios } from '../../data';
import PortfolioTitle from './portfolioTitle';
import PortfolioImages from './portfolioImages';
import PortfolioList from './portfolioList';
import styles from '@/styles/Portfolio.module.css';

export default function Portfolio() {
  return (
    <>
      <PortfolioTitle />
      <PortfolioImages />
      <PortfolioTitle />

      <Container className='container mb-4'>
        <Row>
          {portfolios.map((item) => (
            <PortfolioList key={item.id} item={item} />
          ))}
        </Row>

        <div className='d-grid gap-2 mb-5'>
          <Link href='/wallet'>
            <a className='btn btn-outline-primary btn-lg'>Next</a>
          </Link>
        </div>
      </Container>
    </>
  );
}
