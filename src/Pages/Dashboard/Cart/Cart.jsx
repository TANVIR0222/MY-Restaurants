// import { Button } from "@mui/material";
// import useCard from "../../../Hooks/useCard";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

// const Cart = () => {
//   const [card,refetch] = useCard();
//   const totalPrice = card.reduce((total, item) => total + item.price, 0);

//   const axiosSecure = useAxiosSecure();

//   const handleDelet = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosSecure.delete(`/cards/${id}`).then((res) => {
//           if (res.data?.deletedCount) {
//             refetch()
//             Swal.fire({
//               title: "Deleted!",
//               text: "Your file has been deleted.",
//               icon: "success",
//             });
//           }
//         });
//       }
//     });
//   };
//   return (
//     <div>
//       <div className="flex  justify-evenly">
//         <h1 className="text-4xl">Total Item : {card.length}</h1>
//         <h1 className="text-4xl">Total Price : {totalPrice}</h1>
//         <Button variant="contained">Pay</Button>
//       </div>
//       <div className=" my-10 overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>
//                 <label>#</label>
//               </th>
//               <th>Image</th>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {card.map((item, index) => (
//               <tr key={item._id}>
//                 <th>{index + 1}</th>
//                 <td>
//                   <div className="flex items-center gap-3">
//                     <div className="avatar">
//                       <div className="mask mask-squircle h-12 w-12">
//                         <img
//                           src={item.image}
//                           alt="Avatar Tailwind CSS Component"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </td>
//                 <td>{item.name}</td>
//                 <td>${item.price}</td>
//                 <th>
//                   <Button
//                     sx={{ bgcolor: "red" }}
//                     variant="contained"
//                     onClick={() => handleDelet(item._id)}
//                   >
//                     Delete
//                   </Button>
//                 </th>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Cart;
