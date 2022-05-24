import { BsYoutube, BsStarFill, BsDot } from 'react-icons/bs';
import { assesmentCourse } from '../../data';
import styles from '@/styles/AssesementCourse.module.css';

export default function AssesementCourseList() {
  return (
    <>
      {assesmentCourse.map((item) => (
        <div className='bg-white my-3' key={item.id}>
          <div className={styles.youtube}>
            <div className={styles.rcolor}>
              <BsYoutube />
            </div>

            <div className={styles.adesign}>
              <h4>{item.course}</h4>
              <p>{item.price}</p>
              <div className={styles.astar}>
                <div className={styles.aspan}>
                  <BsStarFill className={styles.yelstar} />
                  <span className='text-dark fw-bold'>{item.rating}</span>
                  <BsDot />
                  <span>{item.text}</span> <BsDot />
                  <span>{item.level}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
