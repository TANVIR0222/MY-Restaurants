import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCard from "../../Hooks/useCard";

const HomeCard = ({ item }) => {

  // refecth
  const [,refetch] = useCard();

  // user
  const { user } = useAuth();
  const { image, name, recipe, price, _id } = item;
  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();
  const location = useLocation();

  const handleAdsToCard = () => {
    if (user && user.email) {
      // send data data base this name
      const catdItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      // send data database
      axiosSecure.post("/cards", catdItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} Add to your card `,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch update cart auto
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not log in",
        text: "Please login to add to the card",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className=" bg-white w-96 hover:bg-slate-100 shadow-md">
        <figure className="px-4 pt-4">
          <img src={image} alt="Shoes" className=" rounded-md" />
          <p className=" flex flex-row mt-4 text-center  rounded bg-red-400 w-fit">
            ${price}
          </p>
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button
              onClick={handleAdsToCard}
              className=" border-yellow-600 uppercase text-yellow-600 btn btn-outline border-0 mt-8 cursor-pointer border-b-4"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
