import { useEffect, useState } from "react";
import HomeCard from "../../shared/HomeCard";
import SectionTitel from "../../../components/SectionTitel";

const Demo = () => {
  const [demo, setDemo] = useState([]);
  useEffect(() => {
    fetch("demo.json")
      .then((res) => res.json())
      .then((data) => setDemo(data));
  }, []);
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
