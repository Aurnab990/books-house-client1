import React from 'react';

const Singlebooks = ({book}) => {
    const {image,name, author, description, price, stocks,} = book;
    // console.log(book.name);
    return (
        <div>
            
            <div className="card w-64 bg-base-100 shadow-xl">
           
           <figure><img className='w-24 h-24' src={image} alt="books" /></figure>
           <div className="card-body">
               <h2 className="card-title">{name}</h2>
               <p className="">{author}</p>
               <p>If a dog chews shoes whose shoes does he choose?</p>
               <div className="card-actions justify-end">
                   <button className="btn btn-primary">Buy Now</button>
               </div>
           </div>
       </div>
        </div>
    );
};

export default Singlebooks;