
import { useQuery } from "@tanstack/react-query";
import Auth from "../Hooks/Auth";
import UseAxioshook from "../Hooks/UseAxioshook";

const Useadmin = () => {
	const { user } = Auth();
	const axiossecure = UseAxioshook();

	const { data: isadmin = false, isLoading: isAdminLoading, refetch } = useQuery({
		queryKey: [user?.email, 'isadmin'],
		enabled: !!user?.email,
		queryFn: async () => {
			if (!user?.email) return false;
			try {
				const res = await axiossecure.get(`/users/admin/${user.email}`);
				// normalize to boolean, never undefined
				return res.data?.isAdmin;
			} catch (err) {
				// on error return false so react-query data is not undefined
				return false;
			}
		}
	});

	return [isadmin, isAdminLoading, refetch];
};

export default Useadmin;
