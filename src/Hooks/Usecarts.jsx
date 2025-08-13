import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import UseAxioshook from '../../src/Hooks/UseAxioshook'
import Auth from "../Hooks/Auth";

const Usecarts = () => {
   const axiossecure =UseAxioshook()
    const { user } = Auth();
  // tan stack query
  const {refetch, data: cart =[] } = useQuery({
    queryKey: ["cart" ,user?.email],
    queryFn: async() =>{
        const res = await axiossecure.get(`/carts?.email=${user.email}`)
        return res.data
    }
     
  });
  return [cart ,refetch];
};

export default Usecarts;
