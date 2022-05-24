import Image from 'next/image';
import { BsDot } from 'react-icons/bs';
import { videoCourse } from '../../data';
import styles from '@/styles/videoCourse.module.css';

export default function VideoCourseList() {
  return (
    <>
      <div className='text-center my-3'>
        <Image src={`/images/card.png`} width='1500%' height='500%' />
      </div>
      <div className='text-center'>
        <button className='btn btn-primary col-6'>Course content</button>
        <button className='btn btn-secondary col-6'>Transcript</button>
      </div>

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
