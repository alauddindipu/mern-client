import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";
import { useLoaderData } from "react-router-dom";


const CategoryDetails = () => {
    const selectedCategory = useLoaderData();
    console.log(selectedCategory);

    // const { category } = useParams();

    // const [cate, setCate] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/bookcategories/${category}`)
    //         .then(res => res.json())
    //         .then(data => setCate(data));
    // }, []);
    // console.log(cate);
    // console.log(category);

    return (<div>
        <Navbar></Navbar>
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
        {/* <div className="card lg:card-side bg-base-100 shadow-xl m-20">
            <figure>
                <img src={cate.img_url} alt={cate.cate} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{cate.cate}</h2>
                <p className="text-xl">{cate.author}</p>
                <p className="pb-5">
                    <span>{cate.det}</span>
                </p>
                <p>
                    <span className="bg-warning">
                        {cate.pridet}
                        BDT
                    </span>{" "}
                </p>
                <p>
                    <span>Rating: {cate.rat}</span>
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy</button>
                    <button className="btn btn-secondary">Wish</button>
                </div>
            </div>
        </div> */}

        <Footer></Footer>
    </div>);
};

export default CategoryDetails;
