import { BsDot } from 'react-icons/bs';
import { videoCourse } from '../../data';
import styles from '@/styles/videoCourse.module.css';

export default function PublishedCourses() {
  return (
    <>
      {videoCourse.map((item) => (
        <div className='bg-white my-3' key={item.id}>
          <div className={styles.card}>
            <div className={styles.font}>
              <h4>{item.course}</h4>

              <div className={styles.fontSize}>
                <span>{item.type}</span> <BsDot />
                <span>{item.duration}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
