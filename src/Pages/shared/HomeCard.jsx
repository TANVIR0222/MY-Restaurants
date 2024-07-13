const HomeCard = ({ item }) => {
  const { image, name, recipe ,price } = item;
  return (
    <div>
      <div className=" bg-white w-96 hover:bg-slate-100 shadow-md">
        <figure className="px-4 pt-4">
          <img
            src={image}
            alt="Shoes"
            className=" rounded-md"
          />
                  <p className= " flex flex-row mt-4 text-center  rounded bg-red-400 w-fit">${price}</p>
 
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
          <button className=" border-yellow-600 uppercase text-yellow-600 btn btn-outline border-0 mt-8 cursor-pointer border-b-4">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
