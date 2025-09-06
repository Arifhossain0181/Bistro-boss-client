import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from '../Hooks/UseAxiosPublic';

const useMenu = () => {
  const axiosPublic = UseAxiosPublic();

  const { data: menu = [], isLoading, refetch } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const res = await axiosPublic.get('/menu');
      return res.data;
    },
  });

  return [menu, isLoading, refetch];
};

export default useMenu;
