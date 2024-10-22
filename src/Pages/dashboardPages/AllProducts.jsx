import { useState, useEffect } from "react";
import { FaEdit, FaUserShield } from "react-icons/fa";
// import { ImBlocked } from "react-icons/im";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);
  const [isAdminToggleModalOpen, setIsAdminToggleModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    displayName: "",
    phone: "",
    photoURL: "",
    address: "",
  });

  // Fetch all from the backend
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/allproducts"
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Load users when the component mounts
  }, []);

  
  // Open the edit modal with the user's current details
  const openEditModal = (product) => {
    setSelectedUser(product);
    setFormData({
      displayName: product.productName || "",
      phone: product.phone || "",
      photoUrl: product.image || "",
      address: product.resalePrice || "",
    });
    setIsEditModalOpen(true);
  };

  // Update user info
  const handleUpdate = async () => {
    try {
      const updatedUser = {
        ...selectedUser,
        displayName: formData.name,
        phone: formData.phone,
        photoUrl: formData.photoUrl,
        address: formData.address,
      };

      await fetch(
        `http://localhost:5000/product/${selectedUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );
      fetchUsers(); // Reload users after update
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // const handleClickedSetBlock = (user) => {
  //   setSelectedUser(user);
  //   setIsBlockModalOpen(true);
  // };
//   const handleClickedSetUserOrAdminRole = (user) => {
//     setSelectedUser(user);
//     setIsAdminToggleModalOpen(true);
//   };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-200 text-gray-600 text-left">
            <th className="py-2 px-4 border">#</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Image</th>

            <th className="py-2 px-4 border">Description</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border">{index + 1}</td>
              <td className="py-2 px-4 border">{product?.productName || "N/A"}</td>
              <td className="py-2 px-4 border">{product?.resalePrice}</td>
              <td className="py-2 px-4 border">
                <img
                  src={product?.image || "https://via.placeholder.com/50"}
                  alt="product"
                  className="w-10 rounded-full"
                />
              </td>
              <td className="py-2 px-4 border">
                {/* {product.isAdmin ? "Admin" : "User"} */}
                {product.description}
              </td>
              <td className="py-2 px-4 border">
                {/* {user.isBlocked ? "Blocked" : "Active"} */}{product.status}
              </td>
              <td className="py-2 px-4 border">
                <button
                  onClick={() => openEditModal(product)}
                  className="mr-2 p-2 rounded-full bg-yellow-500 text-white"
                  title="Edit User"
                >
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h3 className="text-xl mb-4">Edit User</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium">Name:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Phone:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Photo URL:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.photoURL}
                onChange={(e) =>
                  setFormData({ ...formData, photoUrl: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Address:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
            <button
              onClick={handleUpdate}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded ml-4"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Block Modal */}
      {isBlockModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h3 className="text-xl mb-4">
              {selectedUser.isBlocked
                ? "Unblock this user?"
                : "Block this user?"}
            </h3>
            <button
              onClick={handleBlock}
              className={`bg-red-500 text-white px-4 py-2 rounded ${selectedUser.isBlocked ? "bg-green-500" : "bg-red-500"
                }`}
            >
              {selectedUser.isBlocked ? "Unblock" : "Block"}
            </button>
            <button
              onClick={() => setIsBlockModalOpen(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded ml-4"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Toggle Admin Modal */}
      {isAdminToggleModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h3 className="text-xl mb-4">
              {selectedUser.isAdmin
                ? "Revoke Admin Privileges?"
                : "Grant Admin Privileges?"}
            </h3>
            <button
              onClick={handleToggleAdmin}
              className={`bg-green-500 text-white px-4 py-2 rounded`}
            >
              {selectedUser.isAdmin ? "Revoke" : "Grant"}
            </button>
            <button
              onClick={() => setIsAdminToggleModalOpen(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded ml-4"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
