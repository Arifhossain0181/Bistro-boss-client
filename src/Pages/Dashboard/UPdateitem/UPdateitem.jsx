import React, { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaUtensils } from "react-icons/fa";
import SectionTilte from "../../../ComPonent/SectionTitle/SectionTilte";

// 🔹 Upload to ImgBB
const uploadImageToImgBB = async (imageFile) => {
  const apiKey = "21c73b3e489b57ce38cdf8964d161e82";
  const formData = new FormData();
  formData.append("image", imageFile);

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  return data.data.url;
};

const UpdateItem = () => {
  const { _id, name, category, recip, price, image } = useLoaderData();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  // ✅ Load existing item data into form
  useEffect(() => {
    reset({ name, category, recip, price });
  }, [name, category, recip, price, reset]);

  const onSubmit = async (data) => {
    try {
      let imageUrl = image; // keep old image if no new one uploaded

      if (data.image && data.image[0]) {
        imageUrl = await uploadImageToImgBB(data.image[0]);
      }

      const updatedItem = {
        name: data.name,
        category: data.category,
        price: data.price,
        recip: data.recip,
        image: imageUrl,
      };

      const res = await fetch(`http://localhost:5000/menu/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedItem),
      });

      if (res.ok) {
        Swal.fire("Updated!", "Item updated successfully.", "success");
        navigate("/dashboard/manageitems");
      } else {
        Swal.fire("Error", "Update failed", "error");
      }
    } catch (error) {
      console.error("Update error:", error);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  return (
    <div className="flex justify-center items-center py-8 px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6">
        <SectionTilte heading="Update Item" subheading="Admin Panel" />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
          {/* Recipe Name */}
          <div className="form-control w-full">
            <input
         
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe name"
              defaultValue={name}
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
                defaultValue={category}
                className="select select-bordered w-full"
              >
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
                defaultValue={price}
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
              defaultValue={recip}
              className="textarea textarea-bordered h-24 w-full"
            ></textarea>
          </div>

          {/* Image upload */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Upload Image</span>
            </label>
            <input
              {...register("image")}
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full"
            />
            {/* Show existing image */}
            {image && (
              <img
                src={image}
                alt="Current"
                className="mt-3 w-32 h-32 object-cover rounded-lg border"
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full mt-4 rounded-lg text-lg"
          >
            Update Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
