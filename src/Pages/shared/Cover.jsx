import SimpleParallax from "simple-parallax-js";

const Cover = ({ img, title }) => {
  return (
    <SimpleParallax
      delay={0.4}
      orientation={"up - right - down - left - up left - up right - down left - left right"}
      scale={1.3}
      overflow={true}
      maxTransition={90}
    >
      <div
        className="hero min-h-[42rem]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </SimpleParallax>
  );
};

export default Cover;
