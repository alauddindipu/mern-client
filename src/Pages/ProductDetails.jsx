import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {

    const { id } = useParams();

    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setCourse(data));
    }, []);
    console.log(course);
    console.log(id);

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl m-20">
                <figure>
                    <img src={course.image} alt={course.productName} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{course.productName}</h2>
                    <p className="text-xl">{course.category}</p>
                    <p className="pb-5">
                        <span>{course.description}</span>
                    </p>
                    <p>
                        <span className="bg-warning">
                            {course.resalePrice}
                            BDT
                        </span>{" "}
                    </p>
                    <p>
                        <span>Rating: {course.status}</span>
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        <button className="btn btn-secondary">Wish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
