import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
// import useTitle from '../../../hooks/useTitle';

const AddProductUsingReactState = () => {
    const { user } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    // const [categoryObject, setCategoryObject] = useState({});


    const categoryObject = useLoaderData();
    //  console.log(categoryObject);

    const [formData, setFormData] = useState({
        name: '',
        resalePrice: '',
        image: null,
        category: '',
        description: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    // useTitle('Add Product');
    //const imageHostKey = process.env.REACT_APP_imgbb_key;
    const imageHostKey = 'ec39a7a11a2b7d1d5ffaae57fee1fc5e';

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = "Product Name is Required";
        }
        if (!formData.resalePrice) {
            newErrors.resalePrice = "Resell Price is Required";
        }
        if (!formData.image) {
            newErrors.image = "Photo is Required";
        }
        if (!formData.category) {
            newErrors.category = "Category is Required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        const image = formData.image;
        const imageData = new FormData();
        imageData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        try {
            const res = await fetch(url, {
                method: 'POST',
                body: imageData
            });
            const imgData = await res.json();

            if (imgData.success) {
                const product = {
                    categoryId: categoryObject[formData.category],
                    category: formData.category,
                    image: imgData.data.url,
                    productName: formData.name,
                    resalePrice: formData.resalePrice,
                    postingTime: new Date(),
                    description: formData.description,
                    status: 'available',
                };

                // Save product information to the database
                const result = await fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(product)
                });

                const data = await result.json();
                if (data.success) {
                    toast.success(`${formData.name} is added successfully`);
                    //navigate('/dashboard/products');//will change here the path
                }
                //  else {
                //     toast.error('Failed to add product.');// why not success??
                // }
            } else {
                toast.error('Image upload failed. Please try again.');
            }
        } catch (error) {
            console.error('Failed to add product:', error);
            toast.error('An error occurred while adding the product.');
        }
    };

    return (
        <div>
            <div className='w-10/12 p-7'>

                <div className="flex justify-center justify-items-center">
                    <h1 className="text-3xl font-bold text-center mb-10">
                        Add a Product
                    </h1>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/dashboard/totalProducts">
                        <button
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
          py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                        >
                            Products List
                        </button>
                    </Link>
                </div>

                <form onSubmit={handleSubmit} className="border shadow-lg py-2 px-6 mt-3 flex flex-col md:flex-row">
                    <div>
                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
                            <div className='flex input-bordered rounded-none'>
                                <label className="label"> <span className="label-text">Product Name:</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full max-w-xs rounded-none bg-white"
                                />
                            </div>
                            {errors.name && <p className='text-red-500 text-xs'>{errors.name}</p>}
                        </div>

                        <div className='flex justify-center w-full max-w-xs items-center border p-2 border-indigo-400 mb-3'>
                            <div className="form-control w-11/12 max-w-xs mr-4 mt-1">
                                <label className="label"> <span className="label-text">Resell Price</span></label>
                                <input
                                    type="text"
                                    name="resalePrice"
                                    value={formData.resalePrice}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full max-w-xs rounded-none bg-white"
                                />
                                {errors.resalePrice && <p className='text-red-600 text-xs'>{errors.resalePrice}</p>}
                            </div>
                        </div>

                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
                            <div className='flex justify-center items-center max-w-xs'>
                                <label className="label"> <span className="label-text">Upload Photo:</span></label>
                                <input
                                    type="file"
                                    name="image"
                                    onChange={handleFileChange}
                                    className="input input-bordered w-full max-w-xs p-1 rounded-none bg-white"
                                />
                                {errors.image && <p className='text-red-500 text-xs'>{errors.image}</p>}
                            </div>
                        </div>
                    </div>

                    <div className='ml-0 md:ml-12'>
                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
                            <div className='flex justify-center items-center max-w-xs'>
                                <label className="label"> <span className="label-text">Product Category:</span></label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full max-w-xs rounded-none text-sm bg-white"
                                >
                                    <option value="">Select category</option>
                                    {categoryObject.map((c) => (
                                        <option key={c.cid} value={c.cname}>
                                            {c.cname}
                                        </option>
                                    ))}

                                </select>
                            </div>
                            {errors.category && <p className='text-red-500 text-xs'>{errors.category}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
                            <div className='flex input-bordered rounded-none'>
                                <label className="label"> <span className="label-text">Description:</span></label>
                                <input
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full max-w-xs rounded-none bg-white"
                                />
                            </div>
                        </div>
                        <input className='btn btn-info md:w-80 w-64 rounded-none mt-1' value="Add Product" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductUsingReactState;
