import React from "react";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";

// 🔹 Function to upload image to ImgBB
const uploadImageToImgBB = async (imageFile) => {
  const apiKey = "21c73b3e489b57ce38cdf8964d161e82"; // your API key
  const formData = new FormData();
  formData.append("image", imageFile);

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  return data.data.url; // return hosted image link
};

const Additem = () => {
  const { register, handleSubmit ,reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // 1. take selected image file
      const imageFile = data.image[0];

      // 2. upload to ImgBB
      const imageUrl = await uploadImageToImgBB(imageFile);

      // 3. prepare final data
      const itemData = {
        name: data.name,
        category: data.category,
        price: data.price,
        recip: data.recip,
        image: imageUrl,
      };

      console.log("Final Item Data:", itemData);

     //  4. (Optional) send to backend
      
   const menu=   await fetch("http://localhost:5000/menu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemData),
        
      });
      if(menu.ok){
        reset()
         Swal.fire({
        title: "Success!",
        text: "Item has been added successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
      }
      else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
    
      

    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center py-8 px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-black">
          Add New Item
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Recipe Name */}
          <div className="form-control w-full">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Category + Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Category</span>
              </label>
              <select
                {...register("category", { required: true })}
                defaultValue=""
                className="select select-bordered w-full"
              >
                <option disabled value="">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="drinks">Drinks</option>
                <option value="dessert">Dessert</option>
              </select>
            </div>

            {/* Price */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Price</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Recipe details */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Recipe</span>
            </label>
            <textarea
              {...register("recip")}
              className="textarea textarea-bordered h-24 w-full"
            ></textarea>
          </div>

          {/* Image upload */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Upload Image</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full mt-4 rounded-lg text-lg"
          >
            Add Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Additem;
