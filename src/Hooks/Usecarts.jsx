import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import UseAxioshook from '../../src/Hooks/UseAxioshook'


const Usecarts = () => {
   const axiossecure =UseAxioshook()
  // tan stack query
  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: async() =>{
        const res = await axiossecure.get('/carts')
        return res.data
    }
     
  });
  return [cart];
};

export default Usecarts;
