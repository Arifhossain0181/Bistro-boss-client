import { useQuery } from "@tanstack/react-query";
import UseAxioshook from "./UseAxioshook";
import Auth from "./Auth";

const Usecarts = () => {
  const axiossecure = UseAxioshook();
  const { user } = Auth();

  // tanstack query: only enabled when user email is available
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiossecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default Usecarts;
