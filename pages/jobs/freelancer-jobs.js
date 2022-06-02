import { Container, Col } from 'react-bootstrap';
import Image from 'next/image';
import { jobs } from '../../data';
import Layout from '@/components/Layout';
import { BsDot } from 'react-icons/bs';
import styles from '@/styles/videoCourse.module.css';

export default function Jobs() {
  return (
    <Layout title='Jobs'>
      <div>
        <Container>
          <div className={styles.flex}>
            {jobs.map((item) => (
              <div className='bg-white' key={item.id}>
                <div className={styles.card}>
                  <Image
                    src={item.img}
                    alt=''
                    width={30}
                    height={30}
                    objectFit='contain'
                  />

                  <div className={styles.font}>
                    <h4>{item.company}</h4>
                    <div className={styles.fontSize}>
                      <span className='fw-bold text-dark'>{item.role}</span>{' '}
                      <BsDot />
                      <span>{item.type}</span> <BsDot />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  );
}
