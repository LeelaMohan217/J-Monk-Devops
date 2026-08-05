import { homeImages } from "./images";

const HeroImageSection = () => {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex justify-center">
        <img
          src={homeImages.heroRed}
          alt=""
          className="h-[500px] w-auto object-contain [transform:scaleX(-1)]"
        />
      </div>
    </section>
  );
};

export default HeroImageSection;
