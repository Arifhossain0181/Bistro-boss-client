import React from "react";
import UseCarts from "../../../Hooks/Usecarts";
import {FaTrashAlt } from "react-icons/fa";
import  UseAxioshook from '../../../Hooks/UseAxioshook'
import Swal from 'sweetalert2'
const Cart = () => {
  const [cart ,refetch] = UseCarts();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiossecure =  UseAxioshook()

  const handledelet =id =>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
   axiossecure.delete(`/carts/${id}`)
   .then(res =>{
    if(res.data.deleteCount >0){
      refetch()
      Swal.fire({
        title:'deleted',
        text:'confirm',
        icon:"success"
      })
    }
   })
  }
});

  }
  return (
    <div>
      <div className="flex justify-evenly items-center text-4xl">
        <div className="text-4xl">Itms:{cart.length}</div>
        <div>Itms:{totalPrice}</div>
        <button className="btn btn-active text-4xl">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
               #
              </th>
              <th>Imgae</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { cart.map((item ,index) =>  <tr key={item._id}>
              <th>
                {index}
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                {item.name}
               
                
              </td>
              <td>${item.price}</td>
              <th>
                <button 
                onClick={() => handledelet(item._id)}
                className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
              </th>
            </tr>) }
           
           
          </tbody>
          {/* foot */}
         
        </table>
      </div>
    </div>
  );
};

export default Cart;
