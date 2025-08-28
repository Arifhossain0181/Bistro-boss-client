import React from "react";
import { useQuery } from "@tanstack/react-query";
import UseAxioshook from "../../../../Hooks/UseAxioshook";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
const Alluser = () => {
  const axiossecure = UseAxioshook();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiossecure.get("/users");
      return res.data;
    },
  });
  const handledelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiossecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };
  const handledadmin = (user) => {
    axiossecure.patch(`/users/admin/${user._id}`)
    .then(res =>{
        console.log(res.data);
        if(res.data.modifiedCount>0){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }

    })

  }

  return (
    <div>
      <div className="text-center my-4 flex justify-evenly">
        <h2 className="text-3xl"> All users</h2>
        <h2 className="text-3xl"> Total users {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                 { user.role ==='admin' ? 'admin':
                    <button
                    onClick={() => handledadmin(user)}
                    className="btn btn-ghost hover:bg-red-600"
                  >
                    <FaUsers></FaUsers>
                  </button>}
                </td>
                <td>
                  <button
                    onClick={() => handledelete(user)}
                    className="btn btn-ghost hover:bg-red-600"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alluser;
