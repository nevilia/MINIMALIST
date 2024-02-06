import Hero from './Hero/Hero';
import Shop from './Concerns/Shop';
import QuizBanner from './Quiz/QuizBanner';
import Values from './Values/Values';
import Reviews from './Reviews/Reviews';

function Home() {
  return (
    <>
      <div className='sm:p-10'>
        <div className='grid mb-[200px]'>
          <Hero />
          <br />
          <Shop />
        </div>
      </div>
      <QuizBanner />
      <Values />
      <Reviews />
    </>
  );
}

export default Home;
