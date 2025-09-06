import React from "react";
import SectionTilte from "../../../ComPonent/SectionTitle/SectionTilte";
import Swal from "sweetalert2";
import UseAxioshook from "../../../Hooks/UseAxioshook";
import useMenu from "../../../Hooks/UseMenu";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const Manageitem = () => {
  const [menu, loading, refetch] = useMenu();
  const axiossecure = UseAxioshook();

  // Placeholder update function
  const handleUpdate = (item) => {
    console.log("Update item:", item);
    Swal.fire("Info", `Update functionality for "${item.name}" not implemented yet.`, "info");
  };

  // Delete function without try/catch
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete "${item.name}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiossecure
          .delete(`/menu/${item._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch(); // refresh menu
              Swal.fire({
                position: "top",
                icon: "success",
                title: `"${item.name}" has been deleted`,
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              Swal.fire("Error", `Failed to delete "${item.name}"`, "error");
            }
          })
          .catch((err) => {
            console.error("Delete failed:", err);
            Swal.fire("Error", "Something went wrong on the server.", "error");
          });
      }
    });
  };

  if (loading) return <p className="text-center mt-4">Loading menu...</p>;

  return (
    <div>
      <SectionTilte heading="Manage Items" subheading="Admin Panel" />
      <div className="overflow-x-auto mt-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td className="text-amber-600">{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-red-50">${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost hover:bg-red-600"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleUpdate(item)}
                    className="btn btn-ghost hover:bg-blue-600"
                  >
                    <FaEdit />
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

export default Manageitem;
