import { useQuery } from "@tanstack/react-query";
import Auth from "../Hooks/Auth";
import UseAxioshook from "../Hooks/UseAxioshook";

const Useadmin = () => {
  const { user } = Auth();
  const axiosSecure = UseAxioshook();

  const {
    data: isAdmin = false, // ✅ capitalized naming
    isLoading: isAdminLoading,
    refetch,
  } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      if (!user?.email) return false;
      try {
        const res = await axiosSecure.get(`/users/admin/${user.email}`);
        return res.data?.isAdmin === true; // ✅ ensure boolean
      } catch (err) {
        return false; // ✅ fallback if request fails
      }
    },
  });

  return [isAdmin, isAdminLoading, refetch];
};

export default Useadmin;
