type SecHeroType = {
  title: string;
  bgHero: string;
};

const SecondaryHero = ({ title, bgHero }: SecHeroType) => {
  return (
    <>
      <div className={bgHero + " py-24"}>
        <h1 className="text-white uppercase font-bold text-3xl text-center">{title}</h1>
      </div>
    </>
  );
};

export default SecondaryHero;
