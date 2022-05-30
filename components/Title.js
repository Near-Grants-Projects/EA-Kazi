import Link from 'next/link';

export default function Title({ title, info }) {
  return (
    <div className='container d-flex justify-content-between margin mb-2 ps-4'>
      <h2 className='fs-6'>{title}</h2>
      <Link href='#'>
        <a className='text-dark me-3'>{info}</a>
      </Link>
    </div>
  );
}
