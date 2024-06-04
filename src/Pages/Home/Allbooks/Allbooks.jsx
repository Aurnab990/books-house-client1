import React from 'react';
import Singlebooks from './Singlebooks';

const Allbooks = ({books}) => {
    return (
        <div className=" grid grid-cols-1 lg:grid-cols-4 p-10 ml-12 gap-5 mt-10">
            
            {
                books.map(book=><Singlebooks
                key={book._id}
                book={book}
                >

                </Singlebooks>)
            }
            
        </div>
    );
};

export default Allbooks;