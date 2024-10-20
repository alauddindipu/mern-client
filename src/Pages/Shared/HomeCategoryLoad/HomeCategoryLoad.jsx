import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function HomeCategoryLoad() {


    const [bookCategories, setBookCategories] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/bookcategories`)
            .then(res => res.json())
            .then(data => setBookCategories(data));
    }, []);
    console.log(bookCategories);

    let uniqueNames = bookCategories.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);

    //let uniqueCategoryId = bookCategories.map(item => item.categoryid).filter((value, index, self) => self.indexOf(value) === index);

    console.log(uniqueNames);
    //console.log(uniqueCategoryId)
    // const selectedCourse = course.find(n => n._id === id);
    // res.send(selectedCourse)


    return (
        <div>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 lg:gap-12 md:gap-12 xl:12">
                    {
                        uniqueNames.map(bookCategory => (<div className="card card-compact bg-base-100 w-55 h-40 shadow-xl" key={bookCategory}>

                            <div className="card-body">

                                <h2 className="card-title">{bookCategory}</h2>
                                <Link to={`/bookcategories/${bookCategory}`}>
                                    {/* <div className='pt-10'>
                                    <button className='text-blue-600 bg-cyan-400 rounded-xl p-1'>View Products</button>
                                </div> */}
                                    <div className=" h-32 w-32">
                                        <div className="absolute inset-x-0 bottom-0 h-18 flex justify-center">
                                            <button className='bg-blue-500 rounded-xl p-1'>View Products</button>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>))
                    }



                </div>
            </div>
        </div >
    )
}
