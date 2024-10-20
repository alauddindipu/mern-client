import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";

const CourseDetails = () => {
  const { id } = useParams();

  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/course/${id}`)
      .then(res => res.json())
      .then(data => setCourse(data));
  }, []);
  console.log(course);
  console.log(id);

  return (<div>
    <Navbar></Navbar>

    <div className="card lg:card-side bg-base-100 shadow-xl m-20">
      <figure>
        <img src={course.img_url} alt={course.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{course.title}</h2>
        <p className="text-xl">{course.author}</p>
        <p className="pb-5">
          <span>{course.details}</span>
        </p>
        <p>
          <span className="bg-warning">
            {course.price}
            BDT
          </span>{" "}
        </p>
        <p>
          <span>Rating: {course.ratings}</span>
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy</button>
          <button className="btn btn-secondary">Wish</button>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>);
};

export default CourseDetails;
