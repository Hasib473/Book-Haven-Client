import React from 'react';
import { useLoaderData } from 'react-router';
import BookCard from '../Components/AllBook/BookCard';

const AllBooks = () => {
  const bookdata = useLoaderData();
  console.log(bookdata);
  return (
    <div>
      <div className='text-center text-4xl font-extrabold mt-5'>All Book</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5">  
        {
          bookdata.map(book => <BookCard key={book._id} book={book}/>)
        }

      </div>
    </div>
  );
};

export default AllBooks;