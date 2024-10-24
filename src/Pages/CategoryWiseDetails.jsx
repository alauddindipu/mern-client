import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';

export default function CategoryWiseDetails() {

    const selectedCategory = useLoaderData();
    console.log(selectedCategory);

    return (
        <div>

            <div>
                <p className="text-3xl py-10"> Category-wise Available Courses: {selectedCategory.length}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 md:gap-12 xl:12 mb-20">
                {
                    selectedCategory.map(c => (<div className="card card-compact bg-base-100 w-96 shadow-xl" key={c._id}>
                        <figure>
                            <img src={c.image} alt={c.productName} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{c.productName}</h2>
                            <p>{c.lession}</p>
                            <p>
                                <span className="bg-warning p-2 rounded">
                                    {c.resalePrice}
                                    BDT
                                </span>{" "}
                                <span className="bg-success p-2 rounded">{c.status}</span>
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    {" "}
                                    <Link to={`/productDetails/${c._id}`}>View Details</Link>
                                </button>
                            </div>
                        </div>
                    </div>))
                }
            </div>
        </div>
    )
}
// import React, { useEffect, useState } from 'react'
// import { Link, useLoaderData, useParams } from 'react-router-dom';

// export default function CategoryWiseDetails() {

//     const { catParam } = useParams();
//     console.log(catParam)

//     const [products, setProducts] = useState([]);

//     // Fetch all users from the backend
//     const fetchProducts = async () => {
//         try {
//             const response = await fetch(
//                 `http://localhost:5000/bookCategoryWiseDetails/${catParam}`
//             );
//             const data = await response.json();
//             setProducts(data);
//         } catch (error) {
//             console.error("Error fetching users:", error);
//         }
//     };

//     useEffect(() => {
//         fetchProducts(); // Load users when the component mounts
//     }, []);

//     let uniqueNames = products.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);

//     //let uniqueCategoryId = bookCategories.map(item => item.categoryid).filter((value, index, self) => self.indexOf(value) === index);

//     console.log(uniqueNames);
//     //console.log(uniqueCategoryId)
//     // const selectedCourse = course.find(n => n._id === id);
//     // res.send(selectedCourse)


//     return (
//         <div>
//             <div className="flex justify-center">
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 lg:gap-12 md:gap-12 xl:12">
//                     {
//                         uniqueNames.map(bookCategory => (<div className="card card-compact bg-base-100 w-55 h-40 shadow-xl" key={bookCategory}>

//                             <div className="card-body">

//                                 <h2 className="card-title">{bookCategory}</h2>
//                                 <Link to={`/bookcategories/${bookCategory}`}>
//                                     {/* <div className='pt-10'>
//                                     <button className='text-blue-600 bg-cyan-400 rounded-xl p-1'>View Products</button>
//                                 </div> */}
//                                     <div className=" h-32 w-32">
//                                         <div className="absolute inset-x-0 bottom-0 h-18 flex justify-center">
//                                             <button className='bg-blue-500 rounded-xl p-1'>View Products</button>
//                                         </div>
//                                     </div>
//                                 </Link>

//                             </div>
//                         </div>))
//                     }



//                 </div>
//             </div>
//         </div >
//     )
// }
