export default function Title({ title, info }) {
  return (
    <div className='container d-flex justify-content-between mt-4'>
      <h2 className='fs-6'>{title}</h2>
      <p>{info}</p>
    </div>
  );
}
