import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";


const CategoryDetails = () => {
    const selectedCategory = useLoaderData();
    console.log(selectedCategory);

    return (<div>
        <div>Category-wise</div>
        <div>
            <p className="text-3xl py-10">{selectedCategory.category} Available Courses: {selectedCategory.length}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 md:gap-12 xl:12 mb-20">
            {
                selectedCategory.map(c => (<div className="card card-compact bg-base-100 w-96 shadow-xl" key={c._id}>
                    <figure>
                        <img src={c.img_url} alt={c.title} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{c.title}</h2>
                        <p>{c.lession}</p>
                        <p>
                            <span className="bg-warning p-2 rounded">
                                {c.price}
                                BDT
                            </span>{" "}
                            <span className="bg-success p-2 rounded">{c.ratings}</span>
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                                {" "}
                                <Link to={`/products/${c._id}`}>View Details</Link>
                            </button>
                        </div>
                    </div>
                </div>))
            }
        </div>
    </div>);
};

export default CategoryDetails;
