import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCard = () => {

    // user anusare data lode 
    const {user} = useAuth();

    const axiosSecure = useAxiosSecure();

    const {data : card = [] , refetch } = useQuery({
        queryKey:['card' , user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/cards?email=${user?.email}`)
            return  res.data;
        }
    })
    return[card,refetch]
};

export default useCard;