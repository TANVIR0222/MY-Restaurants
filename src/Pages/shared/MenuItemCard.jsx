const MenuItemCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="">
      <div className="flex my-6">
        <img
          className="w-32 rounded-b-full rounded-e-full "
          src={image}
          alt=""
        />
        <div className="ml-3">
          <h3 className=" uppercase">{name}------------------</h3>
          <p className="">{recipe}</p>
        </div>
        <p className="text-red-400">${price}</p>
      </div>
      
    </div>
  );
};

export default MenuItemCard;
