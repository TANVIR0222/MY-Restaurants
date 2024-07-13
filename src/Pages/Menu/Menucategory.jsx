import { Link } from "react-router-dom";
import Cover from "../shared/Cover";
import MenuItemCard from "../shared/MenuItemCard";

const Menucategory = ({ item, title, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} />}

      <div className="grid md:grid-cols-2 gap-10">
        {item.map((item) => (
          <MenuItemCard key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`}>
          <button className=" border-black mb-4 text-black btn btn-outline border-0 mt-8 cursor-pointer border-b-4">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Menucategory;
