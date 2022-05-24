import Image from 'next/image';
import { BsDash } from 'react-icons/bs';
import { job } from '../../data';
import styles from '@/styles/JobDetails.module.css';

export default function JobDetailsHeader() {
  return (
    <>
      {job.map((jb) => (
        <>
          <div>
            <Image
              src={jb.img}
              width={80}
              height={80}
              objectFit='contain'
              alt='company-logo'
            />
          </div>

          <div className={styles.jobinfo}>
            <h3>{jb.role}</h3>
            <span>{jb.company}</span> <BsDash />
            <span>{jb.location}</span> <BsDash />
            <span>{jb.type}</span>
          </div>
        </>
      ))}
    </>
  );
}
