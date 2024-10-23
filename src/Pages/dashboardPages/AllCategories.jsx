import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const AllCategories = () => {
    const loadedUsers = useLoaderData();
    console.log(loadedUsers);
    return (
        <div className="mt-14">
            <div className="flex justify-center justify-items-center">
                <h1 className="text-3xl font-bold text-center mb-10">
                    All Categories: {loadedUsers.length}
                </h1>
                &nbsp;&nbsp;&nbsp;
                <Link to="/dashboard/category">
                    <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
          py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                    >
                        Add Category
                    </button>
                </Link>
            </div>
            <table className="border-collapse w-2/3 mx-auto">
                <thead>
                    <tr>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Category Name
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Category Id
                        </th>

                        {/* <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Actions
                        </th> */}
                    </tr>
                </thead>
                <tbody>
                    {loadedUsers.map((c) => (
                        <tr
                            key={c._id}
                            className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                        >
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                    {" "}
                                    Category name
                                </span>
                                {c.cname}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                    {" "}
                                    Category Id
                                </span>
                                {c.cid}
                            </td>

                            {/* <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                    Actions
                                </span>
                                <Link to={`/edit/${user._id}`}>
                                    <button
                                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 
          border border-blue-500 hover:border-transparent rounded-none"
                                    >
                                        Edit
                                    </button>
                                </Link>
                                &nbsp;&nbsp;&nbsp;
                                <button
                                    onClick={() => handleDelete(user._id)}
                                    className="bg-red-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 
          border border-blue-500 hover:border-transparent rounded-none"
                                >
                                    Delete
                                </button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllCategories;