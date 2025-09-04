import React from "react";
import { useForm } from "react-hook-form";
import { FaUtensils } from 'react-icons/fa';
const Additem = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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

          {/* Category + Price in grid */}
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
          <div>
            <label htmlFor="label"> reci</label>
            <textarea {...register('recip')} className="textarea textarea-border h-24"></textarea>
          </div>
          <div  className="text-black border-4">
            <input {...register('image')} type="file" />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full mt-4 rounded-lg text-lg"
          >
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Additem;
