export default function HeroInfo({ title, info }) {
  return (
    <>
      <h1>{title}</h1>
      <p className='col-md-9 col-lg-10'>{info}</p>
    </>
  );
}
