import React from "react";
import Auth from "../../Hooks/Auth";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import UseCarts from '../../Hooks/Usecarts'
import UseAxioshook from '../../Hooks/UseAxioshook'
const Foodcard = ({ item }) => {
  const { name, recipe, price, category, image ,_id} = item;
  const { user } = Auth();
  const navigate = useNavigate();
  const location = useLocation();
  const [,refetch] = UseCarts()
  const handlecart = () => {
    const axiossecure =UseAxioshook()
    if (user && user.email) {
// send cart item to the daabase
     
      const cartItem ={
      manuId:_id,
      email:user.email,
      name,
      image,price,
      }
       axiossecure.post(`/carts`,cartItem)
      .then(res =>{
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire(`${name} Add to the cart`);
        }
      });
      //refetch cart to uPdate to the cart items count
      refetch()
    } else {
      Swal.fire({
        title: "You are not login",
        text: "Please loign to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-sm">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <h4 className="absolute right-1 mr-4 mt-4 px-4 bg-slate-800 text-white hover:bg-orange-500">
          ${price}
        </h4>
        <div className="card-body text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={ handlecart}
              className="btn btn-outline bg-slate-500 border-0 border-b-4 border-orange-400"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
