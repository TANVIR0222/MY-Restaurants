import SimpleParallax from "simple-parallax-js";

const Cover = ({ img, title , dis }) => {
  return (
    <SimpleParallax
      delay={0.4}
      orientation={"up - right - down - left - up left - up right - down left - left right"}
      scale={1.3}
      overflow={true}
      maxTransition={90}
    >
      <div
        className="hero min-h-[42rem] my-10"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              {dis}
            </p>
          </div>
        </div>
      </div>
    </SimpleParallax>
  );
};

export default Cover;
