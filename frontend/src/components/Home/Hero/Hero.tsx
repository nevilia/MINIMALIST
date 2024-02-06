import HeroCard from "./HeroCard";

function Hero() {
  return (
    <>

      <div className="flex flex-wrap items-center">
        <div className="w-full  md:w-2/3 ">
          <img
            className="w-full min-h-[300px] md:min-w-[766px]"
            src="https://cdn.shopify.com/s/files/1/0410/9608/5665/files/Website_Image_-_eye_cream.jpg?v=1697808466"
            alt=""
          />
        </div>

        <div className="w-full md:w-1/3 text-center lg:text-start">
          <HeroCard />
        </div>
      </div>
    </>
  );
}

export default Hero;
