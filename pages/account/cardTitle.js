export default function CardTitle({ title, text }) {
  return (
    <div className='text-center mt-4'>
      <img src={'/images/logo1.png'} alt='logo' />
      <h3 className='mt-3 fw-bold'>{title}</h3>
      <p className='text-secondary'>{text}</p>
    </div>
  );
}
