import { assesmentInfo } from '../../data';
import Image from 'next/image';
import styles from '@/styles/AssesementCourse.module.css';

export default function AssessmentInfo() {
  return (
    <div className={styles.acompany}>
      {assesmentInfo.map((item) => (
        <div key={item.id} className='d-flex pt-3'>
          <div>
            <img className='shadow-sm rounded-circle mt-2' src={item.img} />
          </div>

          <div className='d-flex flex-column ms-2'>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
