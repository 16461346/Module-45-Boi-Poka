import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const BookDetail = () => {
    const { id } = useParams();
    const nid = parseInt(id)
    const jsonData = useLoaderData();
    const findData = jsonData.find(data => data.bookId === nid)

    const { image, bookName,review} = findData;
    return (
        <div className='flex justify-center'>
            <div className="card bg-base-100  shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl  h-80 object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{bookName}</h2>
                    <p>{review}</p>
                    <div className="card-actions">
                        <button className="btn bg-blue-400">Read</button>
                        <Link to={`/wishList/${findData.id}`} className="btn bg-[#23BE0A]">WishList</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;