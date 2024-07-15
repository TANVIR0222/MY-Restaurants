import SectionTitel from "../../../components/SectionTitel";
import featured from "../../../assets/home/featured.jpg";
import './featured.css'

const Featured = () => {
  return (
    <div className="feature-item pt-8 my-20 bg-fixed">
      <section>
        <SectionTitel subHeading={"Check it out"} heading={"FROM OUR MENU"} />
      </section>
      <div className="md:flex bg-opacity-30 bg-black   text-white flex items-center justify-center pb-20 pt-12 px-36 ">
        <div className="">
          <img src={featured} alt="" />
        </div>
        <div className="text-left md:ml-10 ">
          <h4>March 20, 2023</h4>
          <h1 className="text-xl my-2  uppercase">WHERE CAN I GET SOME?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className=" border-white text-white btn btn-outline border-0 mt-8 cursor-pointer border-b-4">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
