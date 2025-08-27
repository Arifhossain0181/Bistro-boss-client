import React from 'react';
import { useQuery } from '@tanstack/react-query';
import UseAxioshook
    from '../../../../Hooks/UseAxioshook';
const Alluser = () => {
    const axiossecure
        =  UseAxioshook();
    const{data: users =[]} = useQuery({
        queryKey:['users'],
        queryFn:async ()=>{

            const res = await  axiossecure.get('/users')
            return res.data;
        }
      
    })
    return (
        <div>
            <div className='text-center my-4 flex justify-evenly'>
                <h2 className='text-3xl'> All users</h2>
                <h2 className='text-3xl'> Total users {users.length}</h2>

            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {
            users.map((user,index)=><tr key={user._id}>
                <th>{index +1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>Blue</td>
            </tr>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Alluser;