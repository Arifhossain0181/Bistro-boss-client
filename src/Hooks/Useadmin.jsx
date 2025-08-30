

import Auth from "../Hooks/Auth";
import UseAxioshook from "../Hooks/UseAxioshook";
import { useQuery } from "@tanstack/react-query";

const Useadmin = () => {
    const { user } = Auth();
    const axiossecure = UseAxioshook();
    const { data: isadmin, refetch } = useQuery({
        queryKey: [user?.email, 'isadmin'],
        queryFn: async () => {
            const res = await axiossecure.get(`/users/admin/${user.email}`);
            return res.data?.admin;
        }
    });
    return [isadmin, refetch];
};

export default Useadmin;