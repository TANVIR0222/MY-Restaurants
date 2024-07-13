import Cover from "../shared/Cover";
import MenuItemCard from "../shared/MenuItemCard";

const Menucategory = ({ item, title, coverImge }) => {
  return (
    <div>
      {title && <Cover img={coverImge} title={"our menu"} />}

      <div className="grid md:grid-cols-2 gap-10">
        {item.map((item) => (
          <MenuItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menucategory;
