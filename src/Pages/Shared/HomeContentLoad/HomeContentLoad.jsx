import React, { useEffect, useState } from 'react'

export default function HomeContentLoad() {

    const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/course`)
    .then(res => res.json())
    .then(data => setCourse(data));
  }, []);
  console.log(course);
  return (
    <div>
         <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 lg:gap-12 md:gap-12 xl:12">
          {
            course.map(c => (<div className="card card-compact bg-base-100 w-40 h-60 shadow-xl" key={c.course_id}>
              <figure>
                <img src={c.img_url} alt={c.title}/>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{c.title}</h2>
                <p>{c.author}</p>
                <p>
                  {/* <span className="bg-warning p-2 rounded">{c.price} BDT</span> */}
                  <span className="bg-success p-2 rounded">{c.ratings}</span>
                </p>
              </div>
            </div>))
          }
        </div>
      </div>
    </div>
  )
}
