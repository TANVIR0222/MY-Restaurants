import HomeCard from "../../shared/HomeCard";
import SectionTitel from "../../../components/SectionTitel";
import useMenu from "../../../Hooks/useMenu";

const Demo = () => {


  const [menu] = useMenu();
  const demo = menu.filter((item) => item.category === 'demo')
  return (
    <div>
      <section>
        <SectionTitel subHeading={"Should Try"} heading={"popular  item"} />

      </section>
      <div className=" grid md:grid-cols-3 grid-cols-1 gap-4">
        {demo.map((item) => (
          <HomeCard key={item._id} item={item}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Demo;
