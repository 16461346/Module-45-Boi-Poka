import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    
    return (
        <div>
            <Suspense fallback={<p>Loadding...</p>}>
                <div className='grid grid-cols-3 gap-6'>
                    {
                        data.map((sData => <Book key={Book.BookId} sData={sData}></Book>))
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;