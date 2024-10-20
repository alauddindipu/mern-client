import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
        <div>Category Details</div>
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
